import Button from "./Button";

const Sidebar = ({ onStartAddProject, projects }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className=" my-4">
        {projects.map((item) => {
          return (
            <li
              className="px-6 py-2 my-2 cursor-pointer hover:bg-stone-700 rounded-md"
              key={item.title}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
