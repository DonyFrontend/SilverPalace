import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authSlice from "@/features/auth/slice/auth-slice";

const reducer = {
  user: authSlice,
};

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
