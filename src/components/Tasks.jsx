import NewTask from "./NewTask";

const Tasks = ({ onAdd, onDelete }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      <p className="text-stone-800 my-4">This project has no tasks yet</p>
      <ul></ul>
    </section>
  );
};

export default Tasks;