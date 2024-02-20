import EmptyPage from "./components/EmptyPage";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

import { useState } from "react";

function App() {
  const [isAddingProject, setIsAddingProject] = useState(true);
  return (
    <>
      <main className="h-screen flex gap-8 ">
        <Sidebar />
        {isAddingProject ? <NewProject /> : <EmptyPage />}
      </main>
    </>
  );
}

export default App;
