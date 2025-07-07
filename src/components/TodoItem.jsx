const TodoItem = ({ id, value, completed, removeTodo, onToggle }) => {
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {value}
      </span>
      <button onClick={() => removeTodo(id)}>X</button>
    </li>
  );
};

export default TodoItem;
