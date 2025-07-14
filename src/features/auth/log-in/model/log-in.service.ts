import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AuthArg, AuthResponce } from "../../types/auth-types";
import type { ThunkConfig } from "@/app/providers/store/rtk-types";
import { instance } from "@/shared/api/instance";
import type { AxiosError } from "axios";

const logInTC = createAsyncThunk<AuthResponce, AuthArg, ThunkConfig<string>>(
  "auth/login",
  async ({ name, password }, { rejectWithValue }) => {
    try {
      const data = await instance.post("/auth/login", { name, password });
      localStorage.setItem("spg_token", data.data.token);
      return data.data;
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;

      // Возвращаем текст ошибки от сервера
      if (err.response?.data?.message) {
        return rejectWithValue(err.response.data.message);
      }

      return rejectWithValue("Произошла ошибка при регистрации");
    }
  }
);

export { logInTC };
