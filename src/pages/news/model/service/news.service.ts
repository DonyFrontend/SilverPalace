import { createAsyncThunk } from "@reduxjs/toolkit";
import type { NewsResponce } from "../types/news-types";
import type { ThunkConfig } from "@/app/providers/store/rtk-types";
import { instance } from "@/shared/api/instance";
import type { AxiosError } from "axios";

const newsTC = createAsyncThunk<
  NewsResponce,
  { limit?: number },
  ThunkConfig<string>
>("news/get", async ({ limit }, { rejectWithValue }) => {
  try {
    const data = await instance.get(`/news${limit ? `?limit=${limit}` : ""}`);
    return data.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;

    // Возвращаем текст ошибки от сервера
    if (err.response?.data?.message) {
      return rejectWithValue(err.response.data.message);
    }

    return rejectWithValue("Произошла ошибка при регистрации");
  }
});

export { newsTC };
