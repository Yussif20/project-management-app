import { useState } from "react";

const Button = ({ children, projectAdding, ...props }) => {
  const [addProject, setAddProject] = useState(false);
  const handleProjectAdding = () => {
    setAddProject(true);
  };
  return (
    <button
      onClick={handleProjectAdding}
      className="px-4 py-2 rounded-md text-xs md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
