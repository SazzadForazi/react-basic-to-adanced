import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../pages/Root";
import Team from "../pages/Team";
import Notfound from "../pages/Notfound";
import Notes, { action, loader } from "../pages/Notes";
import PostList from "../pages/PostList";
import UserList from "../pages/UserList";
import PostDetails from "../pages/PostDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Notfound />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/posts",
        element: <PostList />,
      },
      {
        path: "/users",
        element: <UserList />,
      },
      {
        path: "/posts/:id",
        element: <PostDetails />,
      },
      {
        path: "/notes",
        element: <Notes />,
        loader: loader,
        action: action,
      },
      // {
      //   path: "*",
      //   element: <Notfound />,
      // },
    ],
  },
]);
