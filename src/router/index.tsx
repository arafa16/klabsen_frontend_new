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
import BankPage from "../pages/bank/bankPage";
import CreateBankPage from "../pages/bank/createBankPage";
import EditBankPage from "../pages/bank/editBankPage";
import ContactEmergancyPage from "../pages/contactEmergancy/contactEmergancyPage";
import CreateContactEmergancyPage from "../pages/contactEmergancy/createContactEmergancyPage";
import EditContactEmergancyPage from "../pages/contactEmergancy/editContactEmergancyPage";
import GanderPage from "../pages/gander/ganderPage";
import CreateGanderPage from "../pages/gander/createGanderPage";
import EditGanderPage from "../pages/gander/editGanderPage";
import GolonganDarahPage from "../pages/golonganDarah/golonganDarahPage";
import CreateGolonganDarahPage from "../pages/golonganDarah/createGolonganDarahPage";
import EditGolonganDarahPage from "../pages/golonganDarah/editGolonganDarahPage";
import GroupPage from "../pages/group/groupPage";
import CreateGroupPage from "../pages/group/createGroupPage";
import EditGroupPage from "../pages/group/editGroupPage";
import JabatanPage from "../pages/jabatan/jabatanPage";
import CreateJabatanPage from "../pages/jabatan/createJabatanPage";
import EditJabatanPage from "../pages/jabatan/editJabatanPage";
import PendidikanPage from "../pages/pendidikan/pendidikanPage";
import CreatePendidikanPage from "../pages/pendidikan/createPendidikanPage";
import EditPendidikanPage from "../pages/pendidikan/editPendidikanPage";
import PenempatanPage from "../pages/penempatan/penempatanPage";
import CreatePenempatanPage from "../pages/penempatan/createPenempatanPage";
import EditPenempatanPage from "../pages/penempatan/editPenempatanPage";
import StatusPerkawinanPage from "../pages/statusPerkawinan/statusPerkawinanPage";
import CreateStatusPerkawinanPage from "../pages/statusPerkawinan/createStatusPerkawinanPage";
import EditStatusPerkawinanPage from "../pages/statusPerkawinan/editStatusPerkawinanPage";
import JamOperasionalPage from "../pages/jamOperasional/jamOperasionalPage";
import CreateJamOperasionalPage from "../pages/jamOperasional/createJamOperasionalPage";
import EditJamOperasionalPage from "../pages/jamOperasional/editJamOperasionalPage";
import PeriodeKerjaPage from "../pages/periodeKerja/periodeKerjaPage";
import EditPeriodeKerjaPage from "../pages/periodeKerja/editPeriodeKerjaPage";
import CreatePeriodeKerjaPage from "../pages/periodeKerja/createPeriodeKerjaPage";
import JamOperasionalGroupPage from "../pages/jamOperasionalGroup/jamOperasionalGroupPage";
import CreateJamOperasionalGroupPage from "../pages/jamOperasionalGroup/createJamOperasionalGroupPage";
import EditJamOperasionalGroupPage from "../pages/jamOperasionalGroup/editJamOperasionalGroupPage";
import TipeEventPage from "../pages/tipeEvent/tipeEventPage";
import CreateTipeEventPage from "../pages/tipeEvent/createTipeEventPage";
import EditTipeEventPage from "../pages/tipeEvent/editTipeEventPage";
import TipeNotificationPage from "../pages/tipeNotification/tipeNotificationPage";
import CreateTipeNotificationPage from "../pages/tipeNotification/createTipeEventPage";
import EditTipeNotificationPage from "../pages/tipeNotification/editTipeEventPage";
import TipePendapatanPage from "../pages/tipePendapatan/tipePendapatanPage";
import CreateTipePendapatanPage from "../pages/tipePendapatan/createTipePendapatanPage";
import EditTipePendapatanPage from "../pages/tipePendapatan/editTipePendapatanPage";
import PelanggaranPage from "../pages/pelanggaran/pelanggaranPage";
import CreatePelanggaranPage from "../pages/pelanggaran/createPelanggaranPage";
import EditPelanggaranPage from "../pages/pelanggaran/editPelanggaranPage";
import StatusPage from "../pages/status/statusPage";
import CreateStatusPage from "../pages/status/createStatusPage";
import EditStatusPage from "../pages/status/editStatusPage";
import StatusInOutPage from "../pages/statusInOut/statusInOutPage";
import CreateStatusInOutPage from "../pages/statusInOut/createStatusInOutPage";
import EditStatusInOutPage from "../pages/statusInOut/editStatusInOutPage";
import StatusKoreksiPage from "../pages/statusKoreksi/statusKoreksiPage";
import CreateStatusKoreksiPage from "../pages/statusKoreksi/createStatusKoreksiPage";
import EditStatusKoreksiPage from "../pages/statusKoreksi/editStatusKoreksiPage";
import MesinAbsenPage from "../pages/mesinAbsen/mesinAbsenPage";
import CreateMesinAbsenPage from "../pages/mesinAbsen/createMesinAbsenPage";
import EditMesinAbsenPage from "../pages/mesinAbsen/editMesinAbsenPage";
import TipeAbsenPage from "../pages/tipeAbsen/tipeAbsenPage";
import EditTipeAbsenPage from "../pages/tipeAbsen/editTipeAbsenPage";
import CreateTipeAbsenPage from "../pages/tipeAbsen/createTipeAbsenPage";
import ForgotPassword from "../pages/auth/forgotPassword";
import ResetPassword from "../pages/auth/resetPassword";
import RegisterPage from "../pages/auth/registerPage";

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
        //Bank
        {
          path: "/bank",
          element: <BankPage />
        },
        {
          path: "/bank/edit/:uuid",
          element: <EditBankPage />
        },
        {
          path: "/bank/create",
          element: <CreateBankPage />
        },
        //contact emergency
        {
          path: "/contact",
          element: <ContactEmergancyPage />
        },
        {
          path: "/contact/create",
          element: <CreateContactEmergancyPage />
        },
        {
          path: "/contact/edit/:uuid",
          element: <EditContactEmergancyPage />
        },
        //gander
        {
          path: "/gander",
          element: <GanderPage />
        },
        {
          path: "/gander/create",
          element: <CreateGanderPage />
        },
        {
          path: "/gander/edit/:uuid",
          element: <EditGanderPage />
        },
        //golongan darah
        {
          path: "/golonganDarah",
          element: <GolonganDarahPage />
        },
        {
          path: "/golonganDarah/create",
          element: <CreateGolonganDarahPage />
        },
        {
          path: "/golonganDarah/edit/:uuid",
          element: <EditGolonganDarahPage />
        },
        //group
        {
          path: "/group",
          element: <GroupPage />
        },
        {
          path: "/group/create",
          element: <CreateGroupPage />
        },
        {
          path: "/group/edit/:uuid",
          element: <EditGroupPage />
        },
        //jabatan
        {
          path: "/jabatan",
          element: <JabatanPage />
        },
        {
          path: "/jabatan/create",
          element: <CreateJabatanPage />
        },
        {
          path: "/jabatan/edit/:uuid",
          element: <EditJabatanPage />
        },
        //pendidikan
        {
          path: "/pendidikan",
          element: <PendidikanPage />
        },
        {
          path: "/pendidikan/create",
          element: <CreatePendidikanPage />
        },
        {
          path: "/pendidikan/edit/:uuid",
          element: <EditPendidikanPage />
        },
        //penempatan
        {
          path: "/penempatan",
          element: <PenempatanPage />
        },
        {
          path: "/penempatan/create",
          element: <CreatePenempatanPage />
        },
        {
          path: "/penempatan/edit/:uuid",
          element: <EditPenempatanPage />
        },
        //status perkawinan
        {
          path: "/statusPerkawinan",
          element: <StatusPerkawinanPage />
        },
        {
          path: "/statusPerkawinan/create",
          element: <CreateStatusPerkawinanPage />
        },
        {
          path: "/statusPerkawinan/edit/:uuid",
          element: <EditStatusPerkawinanPage />
        },
        //jam operasional
        {
          path: "/jamOperasional",
          element: <JamOperasionalPage />
        },
        {
          path: "/jamOperasional/create",
          element: <CreateJamOperasionalPage />
        },
        {
          path: "/jamOperasional/edit/:uuid",
          element: <EditJamOperasionalPage />
        },
        //periode kerja
        {
          path: "/periodeKerja",
          element: <PeriodeKerjaPage />
        },
        {
          path: "/periodeKerja/create",
          element: <CreatePeriodeKerjaPage />
        },
        {
          path: "/periodeKerja/edit/:uuid",
          element: <EditPeriodeKerjaPage />
        },
        //jam operasional group
        {
          path: "/jamOperasionalGroup",
          element: <JamOperasionalGroupPage />
        },
        {
          path: "/jamOperasionalGroup/create",
          element: <CreateJamOperasionalGroupPage />
        },
        {
          path: "/jamOperasionalGroup/edit/:uuid",
          element: <EditJamOperasionalGroupPage />
        },
        //tipe event
        {
          path: "/tipeEvent",
          element: <TipeEventPage />
        },
        {
          path: "/tipeEvent/create",
          element: <CreateTipeEventPage />
        },
        {
          path: "/tipeEvent/edit/:uuid",
          element: <EditTipeEventPage />
        },
        //tipe notification
        {
          path: "/tipeNotification",
          element: <TipeNotificationPage />
        },
        {
          path: "/tipeNotification/create",
          element: <CreateTipeNotificationPage />
        },
        {
          path: "/tipeNotification/edit/:uuid",
          element: <EditTipeNotificationPage />
        },
        //tipe pendapatan
        {
          path: "/tipePendapatan",
          element: <TipePendapatanPage />
        },
        {
          path: "/tipePendapatan/create",
          element: <CreateTipePendapatanPage />
        },
        {
          path: "/tipePendapatan/edit/:uuid",
          element: <EditTipePendapatanPage />
        },
        //pelanggaran
        {
          path: "/pelanggaran",
          element: <PelanggaranPage />
        },
        {
          path: "/pelanggaran/create",
          element: <CreatePelanggaranPage />
        },
        {
          path: "/pelanggaran/edit/:uuid",
          element: <EditPelanggaranPage />
        },
        //status
        {
          path: "/status",
          element: <StatusPage />
        },
        {
          path: "/status/create",
          element: <CreateStatusPage />
        },
        {
          path: "/status/edit/:uuid",
          element: <EditStatusPage />
        },
        //statusInOut
        {
          path: "/statusInOut",
          element: <StatusInOutPage />
        },
        {
          path: "/statusInOut/create",
          element: <CreateStatusInOutPage />
        },
        {
          path: "/statusInOut/edit/:uuid",
          element: <EditStatusInOutPage/>
        },
        //status koreksi
        {
          path: "/statusKoreksi",
          element: <StatusKoreksiPage />
        },
        {
          path: "/statusKoreksi/create",
          element: <CreateStatusKoreksiPage />
        },
        {
          path: "/statusKoreksi/edit/:uuid",
          element: <EditStatusKoreksiPage/>
        },
        //mesin absen
        {
          path: "/mesinAbsen",
          element: <MesinAbsenPage />
        },
        {
          path: "/mesinAbsen/create",
          element: <CreateMesinAbsenPage />
        },
        {
          path: "/mesinAbsen/edit/:uuid",
          element: <EditMesinAbsenPage />
        },
        //tipe absen
        {
          path: "/tipeAbsen",
          element: <TipeAbsenPage />
        },
        {
          path: "/tipeAbsen/create",
          element: <CreateTipeAbsenPage />
        },
        {
          path: "/tipeAbsen/edit/:uuid",
          element: <EditTipeAbsenPage />
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword />,
    },
    {
      path: "/resetPassword/:token",
      element: <ResetPassword />,
    }
  ];

  return useRoutes(routes);
}

export default Router;
