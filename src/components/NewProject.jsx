import Input from "./Input";

const NewProject = () => {
  return (
    <div className="mt-16 w-[35rem]">
      <menu className="flex items-center justify-end gap-4 my-4 ">
        <li>
          <button className="text-stone-800 hover:text-stone-950 ">
            Cancel
          </button>
        </li>
        <li>
          <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">
            Save
          </button>
        </li>
      </menu>
      <div className="flex flex-col gap-8 ">
        <Input label="Title" type="text" />
        <Input textarea label="Description" />
        <Input label="Due Date" type="date" />
      </div>
    </div>
  );
};

export default NewProject;
