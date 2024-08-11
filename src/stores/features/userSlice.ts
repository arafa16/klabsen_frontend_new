import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import fileDownload from "js-file-download";

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

interface varPassword {
    id: string;
    password: string;
}

export const changePassword: any = createAsyncThunk("user/changePassword", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+'/users/'+datas.uuid+'/password', {
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

export const getUsers: any = createAsyncThunk("users/getUsers", async(_, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/users`,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const downloadUsers : any = createAsyncThunk("downloadUsers", async(status : any, thunkAPI) => {
    try {
        return axios({
            url:`${import.meta.env.VITE_REACT_APP_API_URL}/usersExport/${status.code}`,
            responseType: 'blob',
            method: 'GET'
        }).then((response)=>{
            fileDownload(response.data, status.name);
        });
    } catch (error : any) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const importUsers: any = createAsyncThunk("users/importUsers", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/users/import`, datas.formData,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error: any) {
        if(error.response){
            return thunkAPI.rejectWithValue(error.response);
        }
    }
});

export const UpdateStatusUser  : any = createAsyncThunk("users/UpdateStatusUser", async(datas : any, thunkAPI) => {
    try {
        const response = await axios.patch(import.meta.env.VITE_REACT_APP_API_URL+`/users/${datas.id}`, {
            statusId:datas.statusId,
            isActive:datas.isActive
        },{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });
        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});



export const getUserById : any = createAsyncThunk("users/getUserById", async(datas : varPassword, thunkAPI) => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+'/users/'+datas.id,{
            withCredentials: true, // Now this is was the missing piece in the client side 
        });

        return response.data;
    } catch (error : any) {
        if(error.response){
            const message = error.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        resetUsers: (state) => initialState
    },
    extraReducers:(builder) => {

        //change password
        builder.addCase(changePassword.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(changePassword.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //get users
        builder.addCase(getUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //get users
        builder.addCase(getUserById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        });
        builder.addCase(getUserById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //download user
        builder.addCase(downloadUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(downloadUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(downloadUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //importUsers
        builder.addCase(importUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(importUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(importUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //Update Status User
        builder.addCase(UpdateStatusUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(UpdateStatusUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(UpdateStatusUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        
    }
})

export const {resetUsers} = usersSlice.actions;
export default usersSlice.reducer;