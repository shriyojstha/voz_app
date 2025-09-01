import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.jsx";
import "./routes/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost, { FormAction } from "./components/CreatePost.jsx";
import Postlist, { PostLoader } from "./components/Postlist.jsx";
import App1 from "./TodoFile/src/App.jsx";
import store from "./DataFiles/index.js";
import { Provider } from "react-redux";
import Sign from "./components/Login_Details/SignIn.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/create-post",
        element: <CreatePost />,
        action: FormAction,
      },
      {
        path: "/",
        element: <Postlist />,
        loader: PostLoader,
      },
      {
        path: "/todo-list",
        element: <App1 />,
      },
      {
        path: "/login",
        element: <Sign />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  //  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  //  </StrictMode>
);
