import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, onToggle }) => {
  return (
    <div>
      <ul className="todo-list">
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
