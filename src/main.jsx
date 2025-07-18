import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodosProvider } from "./context/TodosContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </StrictMode>
);
