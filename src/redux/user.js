import { createSlice } from '@reduxjs/toolkit';
// import { produce } from 'immer';

export const userNameSlice = createSlice({
   name: "userName",
   initialState:{
      userName: null
   },
   reducers:{
      signIn: (state,action) => {
         state.userName = action.payload;
      },
      logout: (state) => {
         state.userName = null;
      }
   }
});

export const {signIn, logout} = userNameSlice.actions;
export const selectUser = (state) => state.userName.userName.action;
export default userNameSlice.reducer