import { CarWithDeps } from '@/types/prismaTypes';
import Link from 'next/link';

const CarItem = ({ car }: { car: CarWithDeps }) => {
  return (
    <Link href={`cars/${car.id}`} className="cursor-pointer">
      <div className="rounded-lg shadow-md border-2 border-gray-400 overflow-hidden hover:bg-red-900">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">
            {car.brand.name} {car.model.name}
          </h2>
          <p className="text-white">
            {`${car.color} - ${car.location} - ${car.price} CZK`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CarItem;
