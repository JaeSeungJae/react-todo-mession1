import TodoList from "./components/TodoList";
import TodoWriteForm from "./components/TodoWriteForm";
import { TodosProvider } from "./context/TodosContext.jsx";

function App() {
  return (
    <>
      <TodosProvider>
        <TodoWriteForm />
        <TodoList />
      </TodosProvider>
    </>
  );
}

export default App;
