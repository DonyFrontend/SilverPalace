import { createAsyncThunk } from "@reduxjs/toolkit";
import type { CharactersResponse } from "../types/characters-types";
import type { ThunkConfig } from "@/app/providers/store/rtk-types";
import { instance } from "@/shared/api/instance";
import type { AxiosError } from "axios";

const charactersTC = createAsyncThunk<
  CharactersResponse,
  { limit?: number },
  ThunkConfig<string>
>("characters/get", async ({ limit }, { rejectWithValue }) => {
  try {
    const data = await instance.get(
      `/characters${limit ? `?limit=${limit}` : ""}`
    );
    return data.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;

    if (err.response?.data?.message) {
      return rejectWithValue(err.response.data.message);
    }

    return rejectWithValue("Произошла ошибка при регистрации");
  }
});

export { charactersTC };
