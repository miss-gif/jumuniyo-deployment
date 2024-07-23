import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const initialState = {
  accessToken: null,
  refreshToken: cookies.get("refreshToken") || null,
  isLoggedIn: !!cookies.get("refreshToken"),
  userNickname: null,
  mainAddr: null,
  userPhone: null,
  userRole: null,
  tokenMaxAge: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.userNickname = action.payload.userNickname;
      state.mainAddr = action.payload.mainAddr;
      state.userPhone = action.payload.userPhone;
      state.userRole = action.payload.userRole;
      state.tokenMaxAge = action.payload.tokenMaxAge;
      state.isLoggedIn = true; // 로그인 상태 설정
    },
    clearTokens: state => {
      state.accessToken = null;
      state.refreshToken = null;
      state.userNickname = null;
      state.mainAddr = null;
      state.userPhone = null;
      state.userRole = null;
      state.tokenMaxAge = null;
      state.isLoggedIn = false; // 로그아웃 상태 설정
    },
  },
});

export const { setTokens, clearTokens } = authSlice.actions;

export default authSlice.reducer;
