import CarItem from './CarItem';
import Loader from '@/components/Loader';
import { CarWithDeps } from '@/types/prismaTypes';

type Props = {
  cars: CarWithDeps[];
  isLoading: boolean;
};

const CarList = ({ cars, isLoading }: Props) => {
  return (
    <div className={isLoading ? 'opacity-80' : ''}>
      <div className="container mx-auto mt-16">
        {!cars?.length && isLoading && <Loader></Loader>}
        {cars?.length === 0 && !isLoading ? (
          <h2 className="text-center">Žádné výsledky</h2>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars?.map((car: any) => <CarItem key={car.id} car={car} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarList;
