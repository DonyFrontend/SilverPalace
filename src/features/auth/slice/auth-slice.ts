import { createSlice } from "@reduxjs/toolkit";
import type { IAuthSlice } from "../types/auth-types";
import { signUpTC } from "../sign-up/model/sign-up.service";

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
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
