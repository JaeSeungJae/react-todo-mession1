import TodoItem from "./TodoItem";
import { useTodos } from "../context/TodosContext.jsx";

const TodoList = () => {
  const { todos, removeTodo, onToggle } = useTodos();
  return (
    <div>
      <ul className="m-2 p-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            value={todo.value}
            completed={todo.completed}
            removeTodo={removeTodo}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
