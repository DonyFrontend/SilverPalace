import { createAsyncThunk } from "@reduxjs/toolkit";
import { type AuthArg, type SignUpResponce } from "../../types/auth-types";
import { instance } from "@/shared/api/instance";
import type { ThunkConfig } from "@/app/providers/store/rtk-types";
import type { AxiosError } from "axios";

const signUpTC = createAsyncThunk<SignUpResponce, AuthArg, ThunkConfig<string>>(
  "auth/signup",
  async ({ email, name, password }, { rejectWithValue }) => {
    try {
      const data = await instance.post("/auth/signup", {
        email,
        name,
        password,
      });
      console.log(data);
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

export { signUpTC };
