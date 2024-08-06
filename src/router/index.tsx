import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import Login from "../pages/auth/login";
import Dasboard from "../pages/dashboard/dashboardUser"
import AbsenUser from "../pages/absen/absenUser";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          path: "/",
          element: <Dasboard />,
        },
        {
          path: "/absen",
          element: <AbsenUser />,
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
  ];

  return useRoutes(routes);
}

export default Router;
