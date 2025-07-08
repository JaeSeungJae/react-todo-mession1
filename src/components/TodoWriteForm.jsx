import { useTodos } from "../context/TodosContext.jsx";

const TodoWriteForm = () => {
  const { handleSubmit } = useTodos();

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-6 gap-2">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-white shadow-sm"
        placeholder="할 일을 입력하세요..."
        autoFocus
      />
      <button
        type="submit"
        className="ml-2 px-5 py-2 rounded-lg bg-blue-500 text-white font-semibold text-lg hover:bg-blue-600 transition-colors shadow cursor-pointer"
      >
        할 일 추가
      </button>
    </form>
  );
};
export default TodoWriteForm;
