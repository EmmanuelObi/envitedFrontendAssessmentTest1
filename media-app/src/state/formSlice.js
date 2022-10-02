import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
};

const form = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = action.payload;
    },
  },
});

export const formActions = form.actions;
export const formReducer = form.reducer;
