const TodoWriteForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="new-todo" autoFocus />
      <button type="submit" className="add-todo">
        할 일 추가
      </button>
    </form>
  );
};
export default TodoWriteForm;
