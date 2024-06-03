import { CarWithDeps } from '@/types/prismaTypes';

type Props = {
  car: CarWithDeps | null;
};

const CarDetail = ({ car }: Props) => {
  return (
    <>
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
      <div className="grid sm:grid-cols-2 gap-y-3 lg:grid-cols-5  mx-20 mb-16">
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
          <p className="font-bold text-xl">{car?.power} kW</p>
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
