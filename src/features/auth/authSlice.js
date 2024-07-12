// src/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const initialState = {
  accessToken: cookies.get("accessToken") || null,
  refreshToken: cookies.get("refresh-token") || null,
  isLoggedIn: !!cookies.get("accessToken"), // 쿠키에 accessToken이 있으면 로그인 상태로 설정
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true; // 로그인 상태 설정
    },
    clearTokens: state => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false; // 로그아웃 상태 설정
    },
  },
});

export const { setTokens, clearTokens } = authSlice.actions;

export default authSlice.reducer;
