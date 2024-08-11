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
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
