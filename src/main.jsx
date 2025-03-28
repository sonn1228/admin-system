import { Toaster } from "react-hot-toast";
import "@/index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/stores/store";
import App from "@/App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Toaster />
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
  </>
);
