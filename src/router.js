import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
}
