import type { StoreSlice } from "@/app/providers/store/rtk-types";
import type { INew } from "../types/news-types";
import { createSlice } from "@reduxjs/toolkit";
import { newsTC } from "../service/news.service";

const initialState: StoreSlice<INew[]> = {
  data: [],
  error: "",
  loading: false,
};

const newsSlice = createSlice({
  name: "news/slice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(newsTC.pending, (state) => {
        state.loading = true;
      })
      .addCase(newsTC.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(newsTC.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Чтото пошло не так";
      });
  },
});

export default newsSlice.reducer;
