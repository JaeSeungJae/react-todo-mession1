import React, { useState } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState([
    { id: 1, value: "Sample Todo", completed: true },
    { id: 2, value: "Another Todo", completed: false },
    { id: 3, value: "Yet Another Todo", completed: false },
  ]);

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
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
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

  return { todos, handleSubmit, removeTodo, onToggle };
};
