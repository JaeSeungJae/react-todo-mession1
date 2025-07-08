import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodosProvider } from "./context/TodosContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </StrictMode>
);
