import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import { storage } from "./utils/storage";

function App() {
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

  return (
    <TodoList
      todos={todos}
      handleSubmit={handleSubmit}
      removeTodo={removeTodo}
    />
  );
}

export default App;
