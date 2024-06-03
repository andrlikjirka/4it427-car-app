import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export const GET = async (request: NextRequest) => {
  const brandName = request.nextUrl.searchParams.get('brand');
  const data = await prisma.carModel.findMany({
    where: {
      brand: {
        name: brandName || undefined,
      },
    },
    include: {
      brand: true, // Optional: if you want to include brand details
    },
  });
  return NextResponse.json(data, {
    status: 200,
    statusText: 'Car models fetched',
  });
};
