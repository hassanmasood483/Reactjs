import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserAuthControllerProvider } from "./Contexts/UserAuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserAuthControllerProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserAuthControllerProvider>,
);
