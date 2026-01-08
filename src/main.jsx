import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import Store from "./store/Store";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);
