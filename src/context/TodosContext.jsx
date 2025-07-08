import React, { createContext, useContext, useState, useEffect } from "react";
import { setItem, getItem } from "../utils/storage";

export const TodosContext = createContext(); // Context 생성

export const TodosProvider = ({ children }) => {
  // Provider 정의
  const [todos, setTodos] = useState(() => {
    const stored = getItem("todos");
    return (
      stored || [
        { id: 1, value: "Sample Todo", completed: true },
        { id: 2, value: "Another Todo", completed: false },
        { id: 3, value: "Yet Another Todo", completed: false },
      ]
    );
  }); // 로컬 스토리지에서 todos를 가져오고, 없으면 기본값으로 설정

  useEffect(() => {
    setItem("todos", todos);
  }, [todos]); // todos가 변경될 때마다 로컬 스토리지에 저장하여 관리

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoValue = e.target.elements[0].value.trim();
    if (newTodoValue.length > 0) {
      addTodo(newTodoValue);
      e.target.reset();
    }
  };

  const addTodo = (value) => {
    const newTodo = {
      id: Date.now(),
      value: value,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, handleSubmit, removeTodo, onToggle }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => useContext(TodosContext); // 커스텀 훅으로 Context 사용
