import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import Login from "../pages/auth/login";
import DasboardPage from "../pages/dashboard/dashboardPage"
import AbsenUserPage from "../pages/absen/absenUserPage";
import EventPage from "../pages/event/eventPage";
import CreateEvent from "../pages/event/createEventPage";
import EditEvent from "../pages/event/editEventPage";
import KoreksiUserPage from "../pages/koreksi/koreksiUserPage";
import ViewKoreksiPage from "../pages/koreksi/viewKoreksiPage";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          path: "/",
          element: <DasboardPage />,
        },
        {
          path: "/absen",
          element: <AbsenUserPage />,
        },
        {
          path: "/event",
          element: <EventPage />,
        },
        {
          path: "/event/create",
          element: <CreateEvent />,
        },
        {
          path: "/event/edit/:id",
          element: <EditEvent />,
        },
        {
          path: "/koreksi/user",
          element: <KoreksiUserPage />,
        },
        {
          path: "/koreksi/user/:code",
          element: <KoreksiUserPage />,
        },
        {
          path: "/koreksi/data/:id/:code",
          element: <ViewKoreksiPage />,
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
