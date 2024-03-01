import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

const NewProject = ({ onAdd }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  const saveHandler = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim(" ") === "" ||
      enteredTitle.trim(" ") === "" ||
      enteredTitle.trim(" ") === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2>Invalid Input</h2>
        <p>Oops... it looks like that you forget to enter a value</p>
        <p>Please make sure to provide a valid value for every input field.</p>
      </Modal>
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
    </>
  );
};

export default NewProject;
