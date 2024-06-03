export default function Select({
  label,
  id,
  options,
  valueType,
  ...props
}: any) {
  return (
    <div className="text-left mb-3">
      <label htmlFor={id} className="block text-sm font-bold mb-1">
        {label}
      </label>
      <select
        id={id}
        className="w-full border rounded bg-transparent text-base p-2 border-solid border-gray-300"
        {...props}
      >
        <option value={''} />
        {options?.map((option: any) => (
          <option
            key={option.id}
            value={valueType === 'id' ? option.id : option.name}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
