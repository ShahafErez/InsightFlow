import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all surveys
export const fetchSurveys = createAsyncThunk(
  "surveys/fetchSurveys",
  async () => {
    const { data } = await axios.get("/api/surveys");
    return data;
  }
);

// Submit survey
export const submitSurvey = createAsyncThunk(
  "surveys/submitSurvey",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/surveys", values);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const surveysSlice = createSlice({
  name: "surveys",
  initialState: {
    list: [],
    formValues: {},
  },
  reducers: {
    setFormValues: (state, action) => {
      state.formValues = action.payload;
    },
    clearFormValues: (state) => {
      state.formValues = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSurveys.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(submitSurvey.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.formValues = {}; // Clear form values on successful submission
      });
  },
});

export const { setFormValues, clearFormValues } = surveysSlice.actions;
export default surveysSlice.reducer;
