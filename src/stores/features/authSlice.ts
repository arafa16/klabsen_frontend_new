import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    data: any;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}

const initialState : variabel = {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const LoginUser: any = createAsyncThunk("auth/LoginUser", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/login', {
            email: datas.email,
            password: datas.password
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error: any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const RegisterUser: any = createAsyncThunk("auth/RegisterUser", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/register', {
            nik:datas.nik,
            absenId:datas.absenId,
            name:datas.name, 
            ganderId:datas.ganderId, 
            email:datas.email,
            password:datas.password,
            extention:datas.extention,
            nomorHp:datas.nomorHp,
            penempatanId:datas.penempatanId,
            jabatanId:datas.jabatanId,
            atasanId:datas.atasanId,
            nomorKtp:datas.nomorKtp,
            alamatKtp:datas.alamatKtp,
            alamatDomisili:datas.alamatDomisili,
            tempatLahir:datas.tempatLahir,
            tanggalLahir:datas.tanggalLahir,
            nomorNpwp:datas.nomorNpwp,
            statusPerkawinanId:datas.statusPerkawinanId,
            jumlahAnak:datas.jumlahAnak,
            namaIbu:datas.namaIbu,
            pendidikanId:datas.pendidikanId,
            namaSekolah:datas.namaSekolah,
            jurusanSekolah:datas.jurusanSekolah,
            tahunLulus:datas.tahunLulus,
            ipk:datas.ipk,
            nomorBpjsKesehatan:datas.nomorBpjsKesehatan,
            nomorBpjsKetenagakerjaan:datas.nomorBpjsKetenagakerjaan,
            contactEmergencyId:datas.contactEmergencyId,
            emergencyNumber:datas.emergencyNumber,
            emergencyAddress:datas.emergencyAddress,
            nomorSim:datas.nomorSim,
            golonganDarahId:datas.golonganDarahId,
            bankId:datas.bankId,
            nomorRekening:datas.nomorRekening,
            jamOperasionalId:datas.jamOperasionalId,
            groupId:datas.groupId,
            quote:datas.quote
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error: any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const Logout: any = createAsyncThunk("auth/Logout", async(_, thunkAPI) => {
    
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+'/logout',{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error: any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        resetAuth: (state) => initialState
    },
    extraReducers:(builder) => {
        //login
        builder.addCase(LoginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //register
        builder.addCase(RegisterUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(RegisterUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(RegisterUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //logout
        builder.addCase(Logout.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(Logout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(Logout.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
})

export const {resetAuth} = authSlice.actions;
export default authSlice.reducer;