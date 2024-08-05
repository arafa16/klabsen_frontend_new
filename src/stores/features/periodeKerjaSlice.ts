import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface variabel {
    data: any;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: any;
}

const initialState : variabel = {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const getPeriodeKerjas : any = createAsyncThunk("getPeriodeKerjas", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/periode`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getPeriodeKerjasTable : any = createAsyncThunk("getPeriodeKerjasTable", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/periode/${jamOperasionals.limit}&${jamOperasionals.page}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getPeriodeKerjasTableStatus : any = createAsyncThunk("getPeriodeKerjasTableStatus", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/periode/${jamOperasionals.limit}&${jamOperasionals.page}&${jamOperasionals.isActive}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getPeriodeKerjasById : any = createAsyncThunk("getPeriodeKerjasById", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/periode/${jamOperasionals.id}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        console.log(response, 'response');
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const createPeriodeKerjas : any = createAsyncThunk("createPeriodeKerjas", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/periode`,{
            name:jamOperasionals.name,
            bulan:jamOperasionals.bulan,
            tahun:jamOperasionals.tahun,
            tanggalMulai:jamOperasionals.tanggalMulai,
            tanggalSelesai:jamOperasionals.tanggalSelesai,
            jumlahHari:jamOperasionals.jumlahHari,
            code:jamOperasionals.code,
            isActive:jamOperasionals.isActive
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const updatePeriodeKerjas : any = createAsyncThunk("updatePeriodeKerjas", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/periode/${jamOperasionals.id}`,{
            name:jamOperasionals.name,
            bulan:jamOperasionals.bulan,
            tahun:jamOperasionals.tahun,
            tanggalMulai:jamOperasionals.tanggalMulai,
            tanggalSelesai:jamOperasionals.tanggalSelesai,
            jumlahHari:jamOperasionals.jumlahHari,
            code:jamOperasionals.code,
            isActive:jamOperasionals.isActive
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const deletePeriodeKerjas : any = createAsyncThunk("deletePeriodeKerjas", async(jamOperasionals : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/periode/${jamOperasionals.id}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});


export const periodeKerjasSlice = createSlice({
    name: "periodeKerjas",
    initialState,
    reducers:{
        resetPeriodeKerjas: (state) => initialState
    },
    extraReducers:(builder) => {

        // get jam operasional
        builder.addCase(getPeriodeKerjas.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPeriodeKerjas.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPeriodeKerjas.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // get jam operasional table
        builder.addCase(getPeriodeKerjasTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPeriodeKerjasTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPeriodeKerjasTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // get jam operasional table
        builder.addCase(getPeriodeKerjasTableStatus.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPeriodeKerjasTableStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPeriodeKerjasTableStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // get jam operasional by id
        builder.addCase(getPeriodeKerjasById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPeriodeKerjasById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getPeriodeKerjasById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // create jam operasional
        builder.addCase(createPeriodeKerjas.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createPeriodeKerjas.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createPeriodeKerjas.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // update jam operasional
        builder.addCase(updatePeriodeKerjas.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updatePeriodeKerjas.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updatePeriodeKerjas.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // update jam operasional
        builder.addCase(deletePeriodeKerjas.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deletePeriodeKerjas.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deletePeriodeKerjas.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
})

export const {resetPeriodeKerjas} = periodeKerjasSlice.actions;
export default periodeKerjasSlice.reducer;