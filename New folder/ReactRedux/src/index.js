import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import Store from "./Redux/Store";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
