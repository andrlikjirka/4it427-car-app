import db from '@/utils/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest, { params }: any) => {
  const car = await db.car.findUnique({ where: { id: params.id } });
  return NextResponse.json(car, { status: 201, statusText: 'Car fetched' });
};

export const DELETE = async (request: NextRequest, { params }: any) => {
  const car = await db.car.delete({ where: { id: params.id } });
  return NextResponse.json({ status: 204, statusText: 'Car deleted' });
};

export const PUT = async (request: NextRequest, { params }: any) => {
  const body = await request.json();
  const data = await db.car.update({ where: { id: params.id }, data: body });
  return NextResponse.json(data, { status: 201, statusText: 'Car updated' });
};
