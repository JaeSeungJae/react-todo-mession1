import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleSubmit, removeTodo }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="new-todo" autoFocus />
        <button type="submit" className="add-todo">
          할 일 추가
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            value={todo.value}
            completed={todo.completed}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
