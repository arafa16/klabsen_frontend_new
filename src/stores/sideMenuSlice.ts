import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "START MENU",
    {
      icon: "Home",
      title: "Dashboard",
      pathname: "/"
    },
    {
      icon: "Calendar",
      title: "Absen",
      // code: 'absen',
      subMenu: [
        {
          icon: "Calendar",
          pathname: '/absen',
          title: "Absen",
          // code: 'kalendarSub',
        },
        {
          icon: "Edit3",
          pathname: '/koreksi/user',
          title: "Data Koreksi",
          // code: 'pengajuanKoreksiSub',
        },
        {
          icon: "Edit",
          pathname: '/koreksi/approver',
          title: "Approval Koreksi",
          // code: 'approvalKoreksiSub',
        },
        {
          icon: "Edit",
          pathname: '/absen/user',
          title: "Absen Check",
          // code: 'absenCheck',
        },
        {
          icon: "Edit",
          pathname: '/absen/perhitungan',
          title: "Perhitungan Absen",
          // code: 'perhitunganAbsen',
        }, 
        {
          icon: "Edit",
          pathname: '/event',
          title: "Event",
          // code: 'adminEvent',
        },
      ]
    },
    {
      icon: "Users",
      title: "Employees",
      // code: 'employees',
      subMenu: [
        {
          icon: "Users",
          pathname: "/employee/data",
          title: "Data Employe",
          // code: 'dataEmployee',
        },
      ],
    },
    {
      icon: "DollarSign",
      title: "Slip Gaji",
      // code: 'slipGaji',
      subMenu: [
        {
          icon: "FileText",
          pathname: "/pendapatan/user",
          title: "Pendapatan",
          // code: 'pendapatanSub',
        },
        {
          icon: "FileText",
          pathname: "/pendapatan/lain",
          title: "Pendapatan Lain",
          // code: 'pendapatanLainSub',
        },
        {
          icon: "FileEdit",
          pathname: "/pendapatan/admin",
          title: "Admin Pendapatan",
          // code: 'pendapatanAdminSub',
        }
      ],
    },
    {
      icon: "Layers",
      title: "Attribute",
      // code: 'attribute',
      subMenu: [
        {
          icon: "DollarSign",
          pathname: "/bank",
          title: "Bank",
          // code: 'attribute',
        },
        {
          icon: "PhoneOutgoing",
          pathname: "/contact",
          title: "Contact Emergency",
          // code: 'attribute',
        },
        {
          icon: "User",
          pathname: "/gander",
          title: "Gander",
          // code: 'attribute',
        },
        {
          icon: "Droplet",
          pathname: "/golonganDarah",
          title: "Golongan Darah",
          // code: 'attribute',
        },
        {
          icon: "Users",
          pathname: "/group",
          title: "Group",
          // code: 'attribute',
        },
        {
          icon: "Award",
          pathname: "/jabatan",
          title: "Jabatan",
          // code: 'attribute',
        },
        // {
        //   icon: "Watch",
        //   pathname: "/jamOperasional",
        //   title: "Jam Operasional",
        //   code: 'attribute',
        // },
        {
          icon: "Bookmark",
          pathname: "/pendidikan",
          title: "Pendidikan",
          // code: 'attribute',
        },
        {
          icon: "MapPin",
          pathname: "/penempatan",
          title: "Penempatan",
          // code: 'attribute',
        },
        // {
        //   icon: "Watch",
        //   pathname: "/periodeKerja",
        //   title: "Periode Kerja",
        //   code: 'attribute',
        // },
        {
          icon: "Users",
          pathname: "/statusPerkawinan",
          title: "Status Perkawinan",
          // code: 'attribute',
        }
      ],
    },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
