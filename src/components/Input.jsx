const Input = ({ label, textarea, ...props }) => {
  return (
    <p className="flex flex-col">
      <label className="uppercase text-stone-500 font-semibold">{label}</label>
      {textarea ? (
        <textarea
          {...props}
          className="bg-stone-300 p-2 rounded-sm border-none outline-none focus:border-b-2"
        />
      ) : (
        <input {...props} className="bg-stone-300" />
      )}
    </p>
  );
};

export default Input;
