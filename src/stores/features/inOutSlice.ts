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

export const getInOuts : any = createAsyncThunk("getInOuts", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts`,{
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

export const getInOutsById : any = createAsyncThunk("getInOutsById", async(inOuts : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/${inOuts.uuid}`,{
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

export const getInOutsByUser : any = createAsyncThunk("getInOutsByUser", async(inOuts : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/user/${inOuts.uuid}`,{
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

export const getInOutsByIdAndMonth : any = createAsyncThunk("getInOutsByIdAndMonth", async(inOuts : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/idAndMonth/${inOuts.id}&${inOuts.tanggalMulai}&${inOuts.tanggalSelesai}`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        console.log(inOuts.id, inOuts.tanggalMulai, inOuts.tanggalSelesai);
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getInOutsTable : any = createAsyncThunk("getInOutsTable", async(inOuts : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/${inOuts.limit}&${inOuts.page}`,{
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

export const createInOuts : any = createAsyncThunk("creatInOuts", async(inOuts : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts`,{
            userId:inOuts.userId,
            tanggalMulai:inOuts.tanggalMulai,
            tanggalSelesai:inOuts.tanggalSelesai,
            tipeAbsenId:inOuts.tipeAbsenId,
            pelanggaranId:inOuts.pelanggaranId,
            statusInoutId:inOuts.statusInoutId,
            isAbsenWeb:inOuts.isAbsenWeb
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

export const createInOutsByAbsenWeb : any = createAsyncThunk("createInOutsByAbsenWeb", async(inOuts : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/InOutsByAbsenWeb`,{
            userId:inOuts.userId,
            tanggalMulai:inOuts.tanggalMulai,
            tanggalSelesai:inOuts.tanggalSelesai,
            codeTipeAbsen:inOuts.codeTipeAbsen
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

export const updateInOuts : any = createAsyncThunk("updateInOuts", async(inOuts : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/${inOuts.uuid}`,{
            userId:inOuts.userId,
            tanggalMulai:inOuts.tanggalMulai,
            tanggalSelesai:inOuts.tanggalSelesai,
            tipeAbsenId:inOuts.tipeAbsenId,
            pelanggaranId:inOuts.pelanggaranId,
            statusInoutId:inOuts.statusInoutId,
            isAbsenWeb:inOuts.isAbsenWeb
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

export const deleteInOuts : any = createAsyncThunk("deleteInOuts", async(inOuts : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/${inOuts.uuid}`,{
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

export const inOutsSlice = createSlice({
    name: "inOuts",
    initialState,
    reducers:{
        resetInOuts: (state) => initialState
    },
    extraReducers:(builder) => {
        // get inOuts
        builder.addCase(getInOuts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getInOuts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getInOuts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get inOuts
        builder.addCase(getInOutsTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getInOutsTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getInOutsTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get inOuts by id
        builder.addCase(getInOutsById.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getInOutsById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });

        builder.addCase(getInOutsById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        // get inOuts by id
        builder.addCase(getInOutsByIdAndMonth.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getInOutsByIdAndMonth.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getInOutsByIdAndMonth.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })


        // get inOuts by user getInOutsByIdAndMonth
        builder.addCase(getInOutsByUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getInOutsByUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getInOutsByUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create inOuts
        builder.addCase(createInOuts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createInOuts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(createInOuts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create inOuts
        builder.addCase(createInOutsByAbsenWeb.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createInOutsByAbsenWeb.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(createInOutsByAbsenWeb.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // update inOuts
        builder.addCase(updateInOuts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateInOuts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(updateInOuts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // delete inOuts
        builder.addCase(deleteInOuts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteInOuts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(deleteInOuts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {resetInOuts} = inOutsSlice.actions;
export default inOutsSlice.reducer;