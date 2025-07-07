const TodoItem = ({ id, value, completed, removeTodo }) => {
  return (
    <li key={id}>
      <input type="checkbox" checked={completed} readOnly />
      <span>{value}</span>
      <button onClick={() => removeTodo(id)}>X</button>
    </li>
  );
};

export default TodoItem;
