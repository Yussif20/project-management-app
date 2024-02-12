import { useState } from "react";

const initialProject = ["project 1", "project 2", "project 3"];

const Sidebar = () => {
  const [projects, setProjects] = useState(initialProject);

  return (
    <aside className=" h-screen bg-black text-white rounded-r-lg">
      <h2 className="text-white text-center p-4 text-4xl">Your Projects</h2>
      <div>
        <button>add Project</button>
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
