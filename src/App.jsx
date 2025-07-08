import TodoList from "./components/TodoList";
import TodoWriteForm from "./components/TodoWriteForm";

function App() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6">
      <TodoWriteForm />
      <TodoList />
    </div>
  );
}

export default App;
