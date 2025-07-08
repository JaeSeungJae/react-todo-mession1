const TodoItem = ({ id, value, completed, removeTodo, onToggle }) => {
  return (
    <li
      key={id}
      className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-3 border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="mr-3 accent-blue-500 w-5 h-5"
        />
        <span
          className={`mx-2 text-lg select-none ${
            completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {value}
        </span>
      </div>
      <button
        className="ml-4 px-3 py-1 rounded bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition-colors font-bold text-lg cursor-pointer"
        onClick={() => removeTodo(id)}
        aria-label="삭제"
      >
        ×
      </button>
    </li>
  );
};

export default TodoItem;
