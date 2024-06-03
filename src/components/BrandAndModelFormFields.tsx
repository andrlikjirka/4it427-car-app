'use client';
import { Brand, CarModel } from '@prisma/client';
import { ChangeEvent, Fragment, useMemo, useState } from 'react';
import Select from '@/components/Select';

const BrandAndModelFormFields = ({
  models,
  brands,
}: {
  models: CarModel[];
  brands: Brand[];
}) => {
  const [brandId, setBrandId] = useState('');

  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId);
  }, [brandId, models]);
  return (
    <Fragment>
      <Select
        label="Značka"
        id="brand"
        name="brandId"
        valueType="id"
        value={brandId}
        required={true}
        options={brands}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setBrandId(e.target.value);
        }}
      ></Select>
      <Select
        label="Model"
        id="model"
        name="modelId"
        valueType="id"
        required={true}
        options={filteredModels}
        disabled={!filteredModels?.length}
      ></Select>
    </Fragment>
  );
};

export default BrandAndModelFormFields;
