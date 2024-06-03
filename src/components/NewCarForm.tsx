import { createCar } from '@/utils/actions';
import { Brand, CarModel } from '@prisma/client';
import BrandAndModelFormFields from './BrandAndModelFormFields';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';

const NewCarForm = ({
  models,
  brands,
}: {
  models: CarModel[];
  brands: Brand[];
}) => {
  return (
    <div>
      <form action={createCar} className="flex flex-col p-10">
        <BrandAndModelFormFields models={models} brands={brands} />
        <Input
          label="Lokace"
          id="location"
          type="text"
          name="location"
          required={true}
        ></Input>
        <Input
          label="Rok výroby"
          id="year"
          type="number"
          name="year"
          min="1900"
          max="2999"
          required={true}
        ></Input>
        <Input
          label="Barva"
          id="color"
          type="text"
          name="color"
          required={true}
        ></Input>
        <Input
          label="Výkon (kW)"
          id="power"
          type="number"
          name="power"
          min="0"
          required={true}
        ></Input>
        <Input
          label="Najeto (km)"
          id="mileage"
          type="number"
          name="mileage"
          min="0"
          required={true}
        ></Input>
        <Input
          label="Palivo"
          id="fuel"
          type="text"
          name="fuel"
          required={true}
        ></Input>
        <Input
          label="Cena (Kč)"
          id="price"
          type="number"
          name="price"
          min="0"
          required={true}
        ></Input>
        <TextArea
          label="Popis"
          id="description"
          name="description"
          required={true}
        ></TextArea>
        <button
          type="submit"
          className="bg-white rounded-md text-gray-800 py-2 hover:bg-gray-100 mt-4"
        >
          Přidat auto
        </button>
      </form>
    </div>
  );
};

export default NewCarForm;
