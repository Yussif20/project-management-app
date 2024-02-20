import Input from "./Input";
import { useRef } from "react";

const NewProject = ({ onAdd }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const saveHandler = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };
  return (
    <div className=" m-auto w-[35rem]">
      <menu className="flex items-center justify-end gap-4 my-4 ">
        <li>
          <button className="text-stone-800 hover:text-stone-950 ">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            onClick={saveHandler}
          >
            Save
          </button>
        </li>
      </menu>
      <div className="flex flex-col gap-8 ">
        <Input ref={title} label="Title" type="text" />
        <Input ref={description} textarea label="Description" />
        <Input ref={dueDate} label="Due Date" type="date" />
      </div>
    </div>
  );
};

export default NewProject;
