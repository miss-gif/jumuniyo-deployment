import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "/api/user-info";

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (token, thunkAPI) => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.resultData;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "프로필 정보를 가져오는 데 실패했습니다.",
      );
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {
      userId: "",
      userName: "",
      userNickname: "",
      userPhone: "",
      mainAddr: "",
      userEmail: "",
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserProfile.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { updateProfile } = userSlice.actions;

export default userSlice.reducer;
