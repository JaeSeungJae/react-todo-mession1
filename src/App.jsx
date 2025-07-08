import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import TodoWriteForm from "./components/TodoWriteForm";
import { TodosProvider } from "./context/TodosContext.jsx";

function App() {
  // const { todos, handleSubmit, removeTodo, onToggle } = useTodos();

  return (
    <>
      <TodosProvider>
        <TodoWriteForm />
        <TodoList />
      </TodosProvider>
    </>
  );
}

export default App;
