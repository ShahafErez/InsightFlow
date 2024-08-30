import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DEFAULT_CREDITS_AMOUNT_CENTES } from "../constants";

// Fetch current user
export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const { data } = await axios.get("/api/auth/current_user");
  return data;
});

// Regsiter user
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ username, password }) => {
    const { data } = await axios.post("/api/auth/register", {
      username: username,
      password: password,
    });
    return data;
  }
);

// Login user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }) => {
    const { data } = await axios.post("/api/auth/login", {
      username: username,
      password: password,
    });
    return data;
  }
);

// Logout current user
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await axios.post("/api/auth/logout");
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(handleToken.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        return null;
      });
  },
});

export default authSlice.reducer;
