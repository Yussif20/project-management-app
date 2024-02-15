// import { noteImage } from "../assets/no-projects.png";
import Button from "./Button";

const EmptyPage = () => {
  return (
    <div>
      <h2>No Projects Selected</h2>
      <p>Select a project or get started with a new one</p>
      <Button>Create new project</Button>
    </div>
  );
};

export default EmptyPage;
