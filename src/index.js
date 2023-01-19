import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import store from "./store";
import "./components/Todo.css";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// pass store as a prop to Provider so that each and every component can use the centralised state
root.render(
  <StrictMode>
    <Provider store={store}>
      <Navbar />
      <footer className="card-footer bg-transparent border-success">
        <p className="homeTitle text-center">
          {" "}
          Track Your Habits | | As People do not decide their future, they
          decide their habits and their habits decide their future | |{" "}
        </p>
      </footer>
    </Provider>
  </StrictMode>
);
