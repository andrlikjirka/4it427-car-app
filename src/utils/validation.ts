import prisma from '@/utils/prisma';

export function isNotEmpty(value: string) {
  return value?.trim() !== '';
}

export async function isValidBrand(brandId: string) {
  const brand = await prisma.brand.findUnique({
    where: {
      id: brandId,
    },
  });
  return brand;
}

export async function isValidModel(modelId: string) {
  const model = await prisma.carModel.findUnique({
    where: {
      id: modelId,
    },
  });
  return model;
}
