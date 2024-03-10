import { useState } from "react";

const NewTask = () => {
  const [enteredTask, setEnteredTask] = useState("");
  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };
  handleClick = () => {
    setEnteredTask("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        value={enteredTask}
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add task
      </button>
    </div>
  );
};

export default NewTask;
