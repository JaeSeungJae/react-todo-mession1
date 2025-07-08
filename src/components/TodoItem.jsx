import React, { useState } from "react";
import { useTodos } from "../context/TodosContext.jsx";

const TodoItem = ({ id, value, completed }) => {
  const { removeTodo, onToggle, editTodo } = useTodos();
  const [isEdit, setIsEdit] = useState(false);
  const [newValue, setNewValue] = useState("");
  return (
    <>
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
          className="px-3 py-1 rounded text-black-500 hover:bg-blue-500 hover:text-white transition-colors font-bold text-lg cursor-pointer"
          onClick={() => setIsEdit(!isEdit)}
        >
          수정하기
        </button>
        <button
          className="ml-4 px-3 py-1 rounded bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition-colors font-bold text-lg cursor-pointer"
          onClick={() => removeTodo(id)}
          aria-label="삭제"
        >
          ×
        </button>
      </li>
      {isEdit && (
        <div className="flex items-center justify-between bg-white p-4 rounded-lg mb-3 p-2">
          <input
            type="text"
            placeholder="수정할 내용을 입력하세요"
            className="border p-2 rounded w-4/6 mb-2"
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button
            className="bg-blue-300 rounded px-2 mx-4 cursor-pointer"
            onClick={() => {
              if (newValue.trim() !== "") {
                editTodo(id, newValue);
                setNewValue("");
                setIsEdit(false);
              }
            }}
          >
            수정
          </button>
        </div>
      )}
    </>
  );
};

export default TodoItem;
