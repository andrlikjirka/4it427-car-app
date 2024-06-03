'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import CarList from '@/components/CarList';
import Input from '@/components/Input';
import { Brand } from '@prisma/client';
import Select from '@/components/Select';

async function fetchBrands() {
  const res = await fetch('/api/brands');
  if (!res.ok) {
    throw new Error(`brands fetch not ok`);
  }
  const brands = await res.json();
  return brands;
}

async function fetchModelList({ queryKey }: any) {
  const brandName = queryKey[1];
  const modelsResponse = await fetch(`/api/models?brand=${brandName}`);
  if (!modelsResponse.ok) {
    throw new Error(`models/?brand=${brandName} fetch not ok`);
  }
  const modelsData = await modelsResponse.json();
  return modelsData;
}

async function fetchCarList({ queryKey }: any) {
  const { location, brand, model } = queryKey[1];
  const carsResponse = await fetch(
    `api/cars?location=${location}&brand=${brand}&model=${model}`,
  );
  if (!carsResponse.ok) {
    throw new Error(
      `models/?location=${location}&brand=${brand}&model=${model} fetch not ok`,
    );
  }
  const carsData = await carsResponse.json();
  return carsData;
}

const CarSearchForm = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    model: '',
    brand: '',
  });

  const brands = useQuery({
    queryKey: [],
    queryFn: fetchBrands,
    enabled: true,
  });

  const [brand, setBrand] = useState('');

  const models = useQuery({
    queryKey: ['models', brand],
    queryFn: fetchModelList,
    enabled: !!brand,
  });

  const cars = useQuery({
    queryKey: ['cars', searchParams],
    queryFn: fetchCarList,
    placeholderData: keepPreviousData,
  });

  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-6">Nabízená auta</h1>
      <div className="search-cars">
        <form
          className="flex flex-col p-10"
          onSubmit={(e) => {
            e.preventDefault();
            // @ts-ignore
            const formData = new FormData(e.target);
            const obj = {
              location: (formData.get('location') as string) ?? '',
              brand: (formData.get('brand') as string) ?? '',
              model: (formData.get('model') as string) ?? '',
            };
            setSearchParams(obj);
          }}
        >
          <Input
            label="Lokace"
            id="location"
            type="text"
            name="location"
          ></Input>
          <Select
            label="Značka"
            id="brand"
            name="brand"
            valueType="name"
            value={brand}
            options={brands.data}
            disabled={brands.isFetching}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setBrand(e.target.value)
            }
          ></Select>
          <Select
            label="Model"
            id="model"
            name="model"
            valueType="name"
            options={models.data}
            disabled={!models?.data?.length}
          ></Select>
          <button className="bg-white rounded-md text-gray-800 py-2 hover:bg-gray-100 mt-4">
            Search
          </button>
        </form>
      </div>
      <CarList cars={cars.data} isLoading={cars.isFetching}></CarList>
    </section>
  );
};

export default CarSearchForm;
