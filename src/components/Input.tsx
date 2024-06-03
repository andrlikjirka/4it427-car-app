export default function Input({ label, id, ...props }: any) {
  return (
    <div className="text-left mb-3">
      <label htmlFor={id} className="block text-sm font-bold mb-1">
        {label}
      </label>
      <input
        id={id}
        className="w-full border rounded bg-transparent text-base p-2 border-solid border-gray-300"
        {...props}
      />
    </div>
  );
}
