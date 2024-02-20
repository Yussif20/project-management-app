const Input = ({ label, textarea, ...props }) => {
  const classes =
    "w-full p-1 border-b-2 border-stone-300 rounded-sm bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="uppercase text-stone-500 font-bold text-sm">
        {label}
      </label>
      {textarea ? (
        <textarea {...props} className={classes} />
      ) : (
        <input {...props} className={classes} />
      )}
    </p>
  );
};

export default Input;
