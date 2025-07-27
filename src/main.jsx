import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ModalProvider } from "./contexts/ModalContext.jsx";
import ConfirmModal from "./components/Modal/Modal.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <App />
      <ConfirmModal />
    </ModalProvider>
  </StrictMode>
);
