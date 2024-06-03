'use server';

import { redirect } from 'next/navigation';
import prisma from './prisma';
import { revalidatePath } from 'next/cache';

export const createCar = async (formData: FormData) => {
  const brandId = formData.get('brandId')?.toString();
  const modelId = formData.get('modelId')?.toString();
  const location = formData.get('location')?.toString();
  const year = Number(formData.get('year'));
  const color = formData.get('color')?.toString();
  const power = Number(formData.get('power'));
  const mileage = Number(formData.get('mileage'));
  const fuel = formData.get('fuel')?.toString();
  const price = Number(formData.get('price'));
  const description = formData.get('description')?.toString();

  if (
    !brandId ||
    !modelId ||
    !location ||
    !year ||
    !color ||
    !power ||
    !mileage ||
    !fuel ||
    !price ||
    !description
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
