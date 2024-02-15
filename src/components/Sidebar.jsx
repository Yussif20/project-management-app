import { useState } from "react";
import Button from "./Button";

const initialProject = ["project 1", "project 2", "project 3"];

const Sidebar = () => {
  const [projects, setProjects] = useState(initialProject);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button>+ Add Project</Button>
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
