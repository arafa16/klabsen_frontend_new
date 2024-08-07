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

export const getInOutsById : any = createAsyncThunk("inOut2/getInOutsById", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/${datas.uuid}`,{
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
    name: "inOut2",
    initialState,
    reducers:{
        resetInOut2: (state) => initialState
    },
    extraReducers:(builder) => {
       
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

    }
})

export const {resetInOut2} = inOutsSlice.actions;
export default inOutsSlice.reducer;