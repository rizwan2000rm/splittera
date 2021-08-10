import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
  },
});
