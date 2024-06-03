import NewCarForm from '@/components/NewCarForm';
import prisma from '@/utils/prisma';

const fetchBrands = async () => {
  const brands = await prisma.brand.findMany();
  return brands;
};

const fetchModels = async () => {
  const models = await prisma.carModel.findMany();
  return models;
};

const NewCarPage = async () => {
  const brands = await fetchBrands();
  const models = await fetchModels();

  return (
    <div>
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-6">Nové auto</h1>
        <NewCarForm brands={brands} models={models} />
      </section>
    </div>
  );
};

export default NewCarPage;
