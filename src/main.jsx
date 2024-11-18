import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const root = createRoot(document.getElementById("root"));
axios.defaults.baseURL = "https://food-delivery-app-backend-4ncu.onrender.com"; // 
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
