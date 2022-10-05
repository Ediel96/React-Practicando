import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
    status: 'ckecking',
    iud:null,
    email:null,
    displayName:null,
    photoURL:null,
    errorMessage:null
}
 
export const authSlice = createSlice({
name: 'counter',
initialState,
 
reducers: {
   login: (state, { payload }) => {
        state.status = 'authenticated';
        state.iud = payload.uid;
        state.email = payload.email;
        state.displayName = payload.displayName;
        state.photoURL = payload.photoURL;
        state.errorMessage = null;
    },

    logout: (state, { payload }) => {
        console.log(payload);
        state.status = 'not-authenticated';
        state.iud = null;
        state.email = null;
        state.displayName = null;
        state.photoURL = null;
        state.errorMessage = payload.errorMessage;
    },

    ckeckingCredentials: (state, action) => {
       state.status = 'ckecking';
    },

    },
})
export const { login, logout, ckeckingCredentials } = authSlice.actions