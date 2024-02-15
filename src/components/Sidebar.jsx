import { useState } from "react";

const initialProject = ["project 1", "project 2", "project 3"];

const Sidebar = () => {
  const [projects, setProjects] = useState(initialProject);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button className="px-4 py-2 rounded-md text-xs md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
      </div>
      <ul className="flex flex-col">
        {projects.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
