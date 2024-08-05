import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginAndReg from "../pages/LoginAndReg";

import App from "../App";
// const user = 'null'

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login-reg",
        element: <LoginAndReg />,
      },
    ],
  }
]);

export default router;
