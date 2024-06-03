'use server';

import { redirect } from 'next/navigation';
import prisma from './prisma';
import { isNotEmpty, isValidBrand, isValidModel } from '@/utils/validation';

export const createCar = async (formData: FormData) => {
  const brandId = formData.get('brandId')?.toString();
  const modelId = formData.get('modelId')?.toString();
  const location = formData.get('location')?.toString();
  const year = formData.get('year')?.toString();
  const color = formData.get('color')?.toString();
  const power = formData.get('power')?.toString();
  const mileage = formData.get('mileage')?.toString();
  const fuel = formData.get('fuel')?.toString();
  const price = formData.get('price')?.toString();
  const description = formData.get('description')?.toString();

  if (
    !brandId ||
    !isNotEmpty(brandId) ||
    !(await isValidBrand(brandId)) ||
    !modelId ||
    !isNotEmpty(modelId) ||
    !(await isValidModel(modelId)) ||
    !location ||
    !isNotEmpty(location) ||
    !year ||
    !isNotEmpty(year) ||
    !color ||
    !isNotEmpty(color) ||
    !power ||
    !isNotEmpty(power) ||
    !mileage ||
    !isNotEmpty(mileage) ||
    !fuel ||
    !isNotEmpty(fuel) ||
    !price ||
    !isNotEmpty(price) ||
    !description ||
    !isNotEmpty(description)
  ) {
    return;
  }

  await prisma.car.create({
    data: {
      modelId: modelId,
      brandId: brandId,
      location: location,
      year: Number(year),
      color: color,
      power: Number(power),
      mileage: Number(mileage),
      fuel: fuel,
      price: Number(price),
      description: description,
    },
  });

  redirect('/');
};
