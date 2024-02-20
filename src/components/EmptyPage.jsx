import noteImage from "../assets/no-projects.png";
import Button from "./Button";

const EmptyPage = () => {
  return (
    <div className="m-auto flex flex-col gap-4 text-center">
      <div className="flex items-center justify-center">
        <img src={noteImage} alt="note" className="w-20 h-20" />
      </div>
      <h2 className="text-stone-800">No Projects Selected</h2>
      <p>Select a project or get started with a new one</p>
      <Button>Create new project</Button>
    </div>
  );
};

export default EmptyPage;
