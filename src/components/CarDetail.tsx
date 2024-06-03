import { CarWithDeps } from '@/types/prismaTypes';
import Link from 'next/link';

type Props = {
  car: CarWithDeps | null;
};

const CarDetail = ({ car }: Props) => {
  return (
    <>
      <Link href={'/cars'} className="flex flex-row items-center mb-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left me-3"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
        Zpět na seznam aut
      </Link>
      <div className="flex flex-row justify-between mx-20 mb-16">
        <div>
          <h1 className="text-2xl font-bold mb-2">
            {car?.brand.name} {car?.model.name}
          </h1>
          <p>Lokace: {car?.location}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">{car?.price} Kč</h2>
        </div>
      </div>
      <div className="flex flex-row justify-center space-x-32 mx-20 mb-16">
        <div className="flex flex-col text-center">
          <h3 className="mb-1 text-sm">Rok výroky</h3>
          <p className="font-bold text-xl">{car?.year}</p>
        </div>
        <div className="flex flex-col text-center">
          <h3 className="mb-1 text-sm">Najeto</h3>
          <p className="font-bold text-xl">{car?.mileage} km</p>
        </div>
        <div className="flex flex-col text-center">
          <h3 className="mb-1 text-sm">Výkon</h3>
          <p className="font-bold text-xl">{car?.power} km</p>
        </div>
        <div className="flex flex-col text-center">
          <h3 className="mb-1 text-sm">Palivo</h3>
          <p className="font-bold text-xl">{car?.fuel}</p>
        </div>
        <div className="flex flex-col text-center">
          <h3 className="mb-1 text-sm">Barva</h3>
          <p className="font-bold text-xl">{car?.color}</p>
        </div>
      </div>
      <div className="mx-20">
        <h4 className="mb-2 text-sm font-medium">Popis</h4>
        <p>{car?.description}</p>
      </div>
    </>
  );
};

export default CarDetail;
