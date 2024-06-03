import prisma from '@/utils/prisma';
import CarDetail from '@/components/CarDetail';
import Link from 'next/link';
import NotFound from 'next/dist/client/components/not-found-error';

const fetchCarDetail = async (id: string) => {
  const car = await prisma.car.findUnique({
    where: {
      id: id,
    },
    include: {
      model: true,
      brand: true,
    },
  });
  return car;
};

const CarDetailPage = async ({ params }: { params: { id: string } }) => {
  const car = await fetchCarDetail(params.id);
  if (!car) return NotFound();

  return (
    <div>
      <Link href={'/cars'} className="flex flex-row items-center mb-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left me-3"
          viewBox="0 0 16 16"
        >
          <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
        Zpět na seznam aut
      </Link>
      <CarDetail car={car}></CarDetail>
    </div>
  );
};

export default CarDetailPage;
