import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DEFAULT_CREDITS_AMOUNT_CENTES } from "../constants";

// Fetch current user
export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const { data } = await axios.get("/api/current_user");
  return data;
});

// Handle Stripe token
export const handleToken = createAsyncThunk(
  "auth/handleToken",
  async (token) => {
    const { data } = await axios.post("/api/stripe", {
      token: token,
      amount: DEFAULT_CREDITS_AMOUNT_CENTES,
    });
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    logoutUser(state) {
      // TODO- check logout user logic
      return null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(handleToken.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
