import EmptyPage from "./components/EmptyPage";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

import { useState } from "react";

function App() {
  const [isAddingProject, setIsAddingProject] = useState(false);
  return (
    <>
      <main className="h-screen flex ">
        <Sidebar />
        {isAddingProject ? <NewProject /> : <EmptyPage />}
      </main>
    </>
  );
}

export default App;
