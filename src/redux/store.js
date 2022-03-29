import { configureStore } from "@reduxjs/toolkit";
import userNameReducer from "./../redux/user"

export default configureStore({
   reducer: {
      userName: userNameReducer,
   }
})