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

export const getStatusInout : any = createAsyncThunk("getStatusInout", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/statusInout`,{
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

export const getStatusInoutById : any = createAsyncThunk("getStatusInoutById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/statusInout/${datas.uuid}`,{
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

export const getStatusInoutTable : any = createAsyncThunk("getStatusInoutTable", async(datas : any, thunkAPI) => {
    
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/statusInout/${datas.limit}&${datas.page}`,{
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

export const createStatusInout : any = createAsyncThunk("createStatusInout", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL+`/statusInout`,{
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

export const updateStatusInout : any = createAsyncThunk("updateStatusInout", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/statusInout/${datas.uuid}`,{
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

export const deleteStatusInout : any = createAsyncThunk("deleteStatusInout", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.delete(import.meta.env.VITE_REACT_APP_API_URL+`/statusInout/${datas.uuid}`,{
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

export const statusInoutSlice = createSlice({
    name: "StatusInout",
    initialState,
    reducers:{
        resetStatusInout: (state) => initialState
    },
    extraReducers:(builder) => {
        // get StatusInout
        builder.addCase(getStatusInout.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStatusInout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getStatusInout.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get StatusInout by id
        builder.addCase(getStatusInoutById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStatusInoutById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getStatusInoutById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })


        // get StatusInout table
        builder.addCase(getStatusInoutTable.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getStatusInoutTable.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getStatusInoutTable.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create StatusInout 
        builder.addCase(createStatusInout.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createStatusInout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(createStatusInout.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create StatusInout 
        builder.addCase(updateStatusInout.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateStatusInout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(updateStatusInout.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // create StatusInout 
        builder.addCase(deleteStatusInout.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteStatusInout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(deleteStatusInout.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {resetStatusInout} = statusInoutSlice.actions;
export default statusInoutSlice.reducer;