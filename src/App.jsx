import EmptyPage from "./components/EmptyPage";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
import Sidebar from "./components/Sidebar";

import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };
  const handleCancelProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };
  const handleAddProject = (projectData) => {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };
  const handleSelectProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };
  const handleDeleteProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  const handleAddTasks = (text) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };
  const handleDeleteTasks = () => {};

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTasks={handleAddTasks}
      onDeleteTasks={handleDeleteTasks}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === undefined) {
    content = <EmptyPage onStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  }
  return (
    <>
      <main className="h-screen flex gap-8 ">
        <Sidebar
          onStartAddProject={handleStartAddProject}
          projects={projectState.projects}
          onSelectProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
