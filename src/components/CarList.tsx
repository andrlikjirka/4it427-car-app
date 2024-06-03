import CarItem from './CarItem';
import Loader from '@/components/Loader';

const CarList = ({ cars, isLoading }: any) => {
  return (
    <div className={isLoading ? 'opacity-80' : ''}>
      <div className="container mx-auto mt-16">
        {!cars?.length && isLoading && <Loader></Loader>}
        {cars?.length === 0 && !isLoading ? (
          <h2 className="text-center">Žádné výsledky</h2>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {cars?.map((car: any) => <CarItem key={car.id} car={car} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarList;
