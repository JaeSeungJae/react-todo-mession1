import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import TodoWriteForm from "./components/TodoWriteForm";

function App() {
  const { todos, handleSubmit, removeTodo, onToggle } = useTodos();

  return (
    <>
      <TodoWriteForm handleSubmit={handleSubmit} />
      <TodoList todos={todos} removeTodo={removeTodo} onToggle={onToggle} />
    </>
  );
}

export default App;
