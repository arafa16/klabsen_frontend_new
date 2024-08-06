import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import colorSchemeReducer from "./colorSchemeSlice";
import sideMenuReducer from "./sideMenuSlice";
import authReducer from "./features/authSlice";
import meReducer from "./features/meSlice";
import photoReducer from "./features/photoSlice";
import userReducer from "./features/usersSlice";
import eventReducer from "./features/eventSlice";
import periodeKerjaReducer from "./features/periodeKerjaSlice";
import inOutReducer from "./features/inOutSlice";
import koreksiReducer from "./features/koreksiSlice";
import statusInoutReducer from "./features/statusInoutSlice";
import tipeAbsenReducer from "./features/tipeAbsenSlice";
import jamOperasionalReducer from "./features/jamOperasionalSlice";
import pelanggaranReducer from "./features/pelanggaranSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    colorScheme: colorSchemeReducer,
    sideMenu: sideMenuReducer,
    auth: authReducer,
    me: meReducer,
    photo: photoReducer,
    user: userReducer,
    event: eventReducer,
    periodeKerja: periodeKerjaReducer,
    inOut: inOutReducer,
    koreksi: koreksiReducer,
    statusInout: statusInoutReducer,
    tipeAbsen: tipeAbsenReducer,
    jamOperasional: jamOperasionalReducer,
    pelanggaran: pelanggaranReducer,
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
