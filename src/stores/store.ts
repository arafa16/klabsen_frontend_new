import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import colorSchemeReducer from "./colorSchemeSlice";
import sideMenuReducer from "./sideMenuSlice";
import authReducer from "./features/authSlice";
import auth2Reducer from "./features/auth2Slice";
import meReducer from "./features/meSlice";
import photoReducer from "./features/photoSlice";
import userReducer from "./features/userSlice";
import user2Reducer from "./features/user2Slice";
import eventReducer from "./features/eventSlice";
import periodeKerjaReducer from "./features/periodeKerjaSlice";
import inOutReducer from "./features/inOutSlice";
import inOut2Reducer from "./features/inOut2Slice";
import koreksiReducer from "./features/koreksiSlice";
import koreksi2Reducer from "./features/koreksi2Slice";
import statusInoutReducer from "./features/statusInoutSlice";
import tipeAbsenReducer from "./features/tipeAbsenSlice";
import jamOperasionalReducer from "./features/jamOperasionalSlice";
import pelanggaranReducer from "./features/pelanggaranSlice";
import TipeEventReducer from "./features/tipeEventSlice";
import PerhitunganReducer from "./features/perhitunganSlice";
import GroupReducer from "./features/groupSlice";
import StatusReducer from "./features/statusSlice";
import PrivilegeReducer from "./features/privilegeSlice";
import GanderReducer from "./features/ganderSlice";
import StatusPerkawinanReducer from "./features/statusPerkawinanSlice";
import PendidikanReducer from "./features/pendidikanSlice";
import BankReducer from "./features/bankSlice";
import ContactReducer from "./features/contactSlice";
import GolonganDarahReducer from "./features/golonganDarahSlice";
import PenempatanReducer from "./features/penempatanSlice";
import JabatanReducer from "./features/jabatanSlice";
import JamOperasionalGroupReducer from "./features/jamOperasionalGroupSlice";
import AtasanReducer from "./features/atasanSlice";
import PendapatanReducer from "./features/pendapatanSlice";
import TipeNotificationReducer from "./features/tipeNotificationSlice";
import TipePendapatanReducer from "./features/tipePendapatanSlice";
import StatusKoreksiReducer from "./features/statusKoreksiSlice";
import MesinAbsenReducer from "./features/mesinAbsenSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    colorScheme: colorSchemeReducer,
    sideMenu: sideMenuReducer,
    auth: authReducer,
    auth2: auth2Reducer,
    me: meReducer,
    photo: photoReducer,
    user: userReducer,
    user2: user2Reducer,
    event: eventReducer,
    periodeKerja: periodeKerjaReducer,
    inOut: inOutReducer,
    inOut2: inOut2Reducer,
    koreksi: koreksiReducer,
    koreksi2: koreksi2Reducer,
    statusInout: statusInoutReducer,
    tipeAbsen: tipeAbsenReducer,
    jamOperasional: jamOperasionalReducer,
    pelanggaran: pelanggaranReducer,
    tipeEvent: TipeEventReducer,
    perhitungan: PerhitunganReducer,
    group: GroupReducer,
    status: StatusReducer,
    privilege: PrivilegeReducer,
    gander: GanderReducer,
    statusPerkawinan: StatusPerkawinanReducer,
    pendidikan:PendidikanReducer,
    bank:BankReducer,
    contact:ContactReducer,
    golonganDarah:GolonganDarahReducer,
    penempatan:PenempatanReducer,
    jabatan:JabatanReducer,
    jamOperasionalGroup:JamOperasionalGroupReducer,
    atasan:AtasanReducer,
    pendapatan:PendapatanReducer,
    tipeNotification:TipeNotificationReducer,
    tipePendapatan:TipePendapatanReducer,
    statusKoreksi:StatusKoreksiReducer,
    mesinAbsen:MesinAbsenReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
