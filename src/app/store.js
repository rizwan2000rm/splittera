import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authUserReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
  },
});
