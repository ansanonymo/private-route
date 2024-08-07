export default function InputField({ children, label, htmlFor, error }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}{" "}
      </label>
      {children}
      {error && <p className="my-2 text-rose-700">{error?.message}</p>}
    </div>
  );
}
