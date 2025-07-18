import { createSlice } from "@reduxjs/toolkit";
import type { IAuthSlice } from "../types/auth-types";
import { signUpTC } from "../sign-up/model/sign-up.service";
import { logInTC } from "../log-in/model/log-in.service";

const initialState: IAuthSlice = {
  user: {
    _id: "",
    comments: [],
    email: "",
    name: "",
    password: "",
    total_likes: 0,
  },
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth/slice",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem("spg_token");
    },
  },
  extraReducers(builder) {
    builder.addCase(signUpTC.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUpTC.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    });
    builder.addCase(signUpTC.rejected, (state, action) => {
      state.error = action.payload || "Что-то пошло не так";
    });
    builder.addCase(logInTC.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logInTC.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    });
    builder.addCase(logInTC.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Что-то пошло не так";
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
