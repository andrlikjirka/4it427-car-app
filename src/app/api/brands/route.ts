import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export const GET = async () => {
  const data = await prisma.brand.findMany();
  return NextResponse.json(data);
};
