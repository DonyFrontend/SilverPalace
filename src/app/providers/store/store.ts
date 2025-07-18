import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authSlice from "@/features/auth/slice/auth-slice";
import charactersSlice from "@/pages/characters/model/slice/characters-slice"
import newsSlice from "@/pages/news/model/slice/news-slice";

const reducer = {
  user: authSlice,
  characters: charactersSlice,
  news: newsSlice,
};

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
