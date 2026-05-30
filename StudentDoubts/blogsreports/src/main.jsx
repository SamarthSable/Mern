import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import BlogsProvider from "./provider/BlogsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BlogsProvider>
        <App />
      </BlogsProvider>
    </BrowserRouter>
  </StrictMode>,
);
