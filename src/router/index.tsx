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
import KoreksiApproverPage from "../pages/koreksi/koreksiApproverPage";
import ViewKoreksiApproverPage from "../pages/koreksi/viewKoreksiApproverPage"
import AbsenCheckByUser from "../pages/absen/absenCheckByUser";
import AbsenUserByIdPage from "../pages/absen/absenUserByIdPage";
import PerhitunganAbsenPage from "../pages/absen/perhitunganAbsenPage";
import DataEmployePage from "../pages/employee/dataEmployePage";
import ViewEmployePage from "../pages/employee/viewEmployePage";
import UpdateEmployePage from "../pages/employee/updateEmploye";
import CreateEmployeePage from "../pages/employee/createEmploye";
import PendapatanPage from "../pages/pendapatan/pendapatanPage";
import PendapatanLainPage from "../pages/pendapatan/pendapatanLainPage";
import AdminPendapatan from "../pages/pendapatan/adminPendapatan";
import ViewSlipPage from "../pages/pendapatan/viewSlipPage";
import ViewSlipBonusPage from "../pages/pendapatan/viewSlipBonusPage";

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
          path: "/absen/user",
          element: <AbsenCheckByUser />
        },
        {
          path: "/absen/user/:uuid",
          element: <AbsenUserByIdPage />
        },
        {
          path: "/absen/perhitungan",
          element: <PerhitunganAbsenPage />
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
          path: "/koreksi/user/:id/:code",
          element: <ViewKoreksiPage />,
        },
        {
          path: "/koreksi/approver",
          element: <KoreksiApproverPage />,
        },
        {
          path: "/koreksi/approver/:code",
          element: <KoreksiApproverPage />,
        },
        {
          path: "/koreksi/approver/:id/:code",
          element: <ViewKoreksiApproverPage />,
        },
        //employe
        {
          path: "/employee/data",
          element: <DataEmployePage />
        },
        {
          path: "/employee/create",
          element: <CreateEmployeePage />
        },
        {
          path: "/employee/data/:id",
          element: <ViewEmployePage />
        },
        {
          path: "/employee/update/:id",
          element: <UpdateEmployePage />
        },
        //pendapatan
        {
          path: "/pendapatan/user",
          element: <PendapatanPage />
        },
        {
          path: "/pendapatan/lain",
          element: <PendapatanLainPage />
        },
        {
          path: "/pendapatan/admin",
          element: <AdminPendapatan />
        },
        {
          path: "/pendapatan/slip/:id",
          element: <ViewSlipPage />
        },
        {
          path: "/pendapatan/bonus/:id",
          element: <ViewSlipBonusPage />
        },
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
