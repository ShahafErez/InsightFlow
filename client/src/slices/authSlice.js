import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch current user
export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const { data } = await axios.get("/api/auth/current_user");
  return data;
});

// Logout current user
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await axios.post("/api/auth/logout");
});

// Handle Stripe token
export const handleToken = createAsyncThunk(
  "auth/handleToken",
  async (token) => {
    const { data } = await axios.post("/api/stripe", token);
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(handleToken.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        return null;
      });
  },
});

export default authSlice.reducer;
