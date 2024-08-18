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

export const getTipeNotifications : any = createAsyncThunk("getTipeNotifications", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeNotifications`,{
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

export const getTipeNotificationsById : any = createAsyncThunk("getTipeNotificationsById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeNotifications/${datas.uuid}`,{
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

export const getTipeNotificationsTable : any = createAsyncThunk("getTipeNotificationsTable", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/tipeNotifications/${datas.limit}&${datas.page}`,{
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

export const createTipeNotifications : any = createAsyncThunk("createTipeNotifications", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/tipeNotifications`,{
            name: datas.name,
            code: datas.code,
            isActive: datas.isActive
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

export const updateTipeNotifications : any = createAsyncThunk("updateTipeNotifications", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/tipeNotifications/${datas.uuid}`,{
            name: datas.name,
            code: datas.code,
            isActive: datas.isActive
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

export const deleteTipeNotifications : any = createAsyncThunk("deleteTipeNotifications", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/tipeNotifications/${datas.uuid}`,{
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

export const tipeNotificationsSlice = createSlice({
    name: "tipeNotifications",
    initialState,
    reducers:{
        resetTipeNotification: (state) => initialState
    },
    extraReducers:(builder) => {
        // get tipeNotifications
        builder.addCase(getTipeNotifications.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getTipeNotifications.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getTipeNotifications.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get tipeNotifications by id
        builder.addCase(getTipeNotificationsById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getTipeNotificationsById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getTipeNotificationsById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get tipeNotifications table
        builder.addCase(getTipeNotificationsTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getTipeNotificationsTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getTipeNotificationsTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create tipeNotifications
        builder.addCase(createTipeNotifications.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createTipeNotifications.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createTipeNotifications.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // update tipeNotifications 
        builder.addCase(updateTipeNotifications.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateTipeNotifications.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateTipeNotifications.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // delete tipeNotifications 
        builder.addCase(deleteTipeNotifications.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteTipeNotifications.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteTipeNotifications.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
})

export const {resetTipeNotification} = tipeNotificationsSlice.actions;
export default tipeNotificationsSlice.reducer;