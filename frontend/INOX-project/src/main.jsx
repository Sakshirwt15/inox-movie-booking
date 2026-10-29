import axios from "axios";

axios.defaults.baseURL =
  import.meta.env.VITE_API_URL || "http://localhost:8081";

import { createRoot } from "react-dom/client";
import App from "./App";
// import "./global.css";
import "./inox.css";

createRoot(document.getElementById("root")).render(<App />);
