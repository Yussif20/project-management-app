import { useState } from "react";
import Input from "./Input";

const NewProject = () => {
  const [isAddingProject, setIsAddingProject] = useState(false);
  return (
    <div className="m-auto flex flex-col p-16 w-2/3">
      <menu className="ml-auto flex gap-4">
        <button className="text-stone-900 font-semibold hover:text-stone-500 ">
          Cancel
        </button>
        <button className="bg-stone-900 hover:bg-stone-700 text-stone-50 px-4 py-2 rounded-md">
          Save
        </button>
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
