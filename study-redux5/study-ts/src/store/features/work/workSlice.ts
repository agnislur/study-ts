// src/features/work/workSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WorkState } from "./workTypes";
import { fetchWork, saveWork } from "./workThunk";
import { formatToWIB } from "./workUtils";

const initialState: WorkState = {
  works: [],
};

export const WorkSlice = createSlice({
  name: "work",
  initialState,
  reducers: {
    addWork: (state, action: PayloadAction<{ work: string }>) => {
      state.works.push({
        id: state.works.length,
        tiket: action.payload.work,
        createdAt: formatToWIB(new Date().toISOString()), 
        completedAt: formatToWIB(new Date().toISOString()),
        status: action.payload.work,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWork.fulfilled, (state, action) => {
      state.works = action.payload;
    });

    builder.addCase(saveWork.fulfilled, (state, action) => {
      state.works.push(action.payload);
    });
  },
});

export default WorkSlice.reducer;
export const { addWork } = WorkSlice.actions;
