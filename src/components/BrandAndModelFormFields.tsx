'use client';
import { Brand, CarModel } from '@prisma/client';
import { Fragment, useMemo, useState } from 'react';

const BrandAndModelFormFields = ({
  models,
  brands,
}: {
  models: CarModel[];
  brands: Brand[];
}) => {
  const [brandId, setBrandId] = useState('');

  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId);
  }, [brandId, models]);
  return (
    <Fragment>
      <div className="text-left mb-3">
        <label htmlFor="brand" className="block text-sm font-bold mb-1">
          Značka
        </label>
        <select
          name="brandId"
          required={true}
          id="brand"
          className="w-full border rounded bg-transparent text-base p-2 border-solid border-gray-300"
          value={brandId}
          onChange={(e) => {
            setBrandId(e.target.value);
          }}
        >
          <option value={''} />
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>
      <div className="text-left mb-3">
        <label htmlFor="model" className="block text-sm font-bold mb-1">
          Model
        </label>
        <select
          id="model"
          name="modelId"
          required={true}
          className="w-full border rounded bg-transparent text-base p-2 border-solid border-gray-300"
          disabled={!filteredModels?.length}
        >
          <option value={''} />
          {filteredModels.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
      </div>
    </Fragment>
  );
};

export default BrandAndModelFormFields;
