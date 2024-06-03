import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export const GET = async (request: NextRequest) => {
  const location = request.nextUrl.searchParams.get('location');
  const brand = request.nextUrl.searchParams.get('brand');
  const model = request.nextUrl.searchParams.get('model');

  const data = await prisma.car.findMany({
    where: {
      location: location || undefined,
      brand: {
        name: brand || undefined,
      },
      model: {
        name: model || undefined,
      },
    },
    include: {
      brand: true,
      model: true,
    },
  });
  return NextResponse.json(data);
};
