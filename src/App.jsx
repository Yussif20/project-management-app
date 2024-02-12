import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="container flex ">
        <Sidebar />
        <NewProject />
      </div>
    </>
  );
}

export default App;
