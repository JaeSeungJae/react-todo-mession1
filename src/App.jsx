import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import { storage } from "./utils/storage";

function App() {
  const { todos, handleSubmit, removeTodo, onToggle } = useTodos();

  return (
    <TodoList
      todos={todos}
      handleSubmit={handleSubmit}
      removeTodo={removeTodo}
      onToggle={onToggle}
    />
  );
}

export default App;
