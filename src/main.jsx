import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";

import "@fontsource/antonio/500.css"; // Medium
import "@fontsource/spartan/400.css"; // Regular
import "@fontsource/spartan/700.css"; // Bold

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
