import noteImage from "../assets/no-projects.png";
import Button from "./Button";

const EmptyPage = ({ onStartAddProject }) => {
  return (
    <div className="m-auto flex flex-col gap-4 text-center ">
      <img
        src={noteImage}
        alt="An empty task list"
        className="w-20 h-20 mx-auto object-contain"
      />
      <h2 className="text-stone-500  text-xl">No Projects Selected</h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <Button onClick={onStartAddProject}>Create new project</Button>
    </div>
  );
};

export default EmptyPage;
