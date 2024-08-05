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

export const LoginUser: any = createAsyncThunk("auth/LoginUser", async(data : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/login', {
            email: data.email,
            password: data.password
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

export const RegisterUser: any = createAsyncThunk("auth/RegisterUser", async(data : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+'/register', {
            nik:data.nik,
            absenId:data.absenId,
            name:data.name, 
            ganderId:data.ganderId, 
            email:data.email,
            password:data.password,
            extention:data.extention,
            nomorHp:data.nomorHp,
            penempatanId:data.penempatanId,
            jabatanId:data.jabatanId,
            atasanId:data.atasanId,
            nomorKtp:data.nomorKtp,
            alamatKtp:data.alamatKtp,
            alamatDomisili:data.alamatDomisili,
            tempatLahir:data.tempatLahir,
            tanggalLahir:data.tanggalLahir,
            nomorNpwp:data.nomorNpwp,
            statusPerkawinanId:data.statusPerkawinanId,
            jumlahAnak:data.jumlahAnak,
            namaIbu:data.namaIbu,
            pendidikanId:data.pendidikanId,
            namaSekolah:data.namaSekolah,
            jurusanSekolah:data.jurusanSekolah,
            tahunLulus:data.tahunLulus,
            ipk:data.ipk,
            nomorBpjsKesehatan:data.nomorBpjsKesehatan,
            nomorBpjsKetenagakerjaan:data.nomorBpjsKetenagakerjaan,
            contactEmergencyId:data.contactEmergencyId,
            emergencyNumber:data.emergencyNumber,
            emergencyAddress:data.emergencyAddress,
            nomorSim:data.nomorSim,
            golonganDarahId:data.golonganDarahId,
            bankId:data.bankId,
            nomorRekening:data.nomorRekening,
            jamOperasionalId:data.jamOperasionalId,
            groupId:data.groupId,
            quote:data.quote
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