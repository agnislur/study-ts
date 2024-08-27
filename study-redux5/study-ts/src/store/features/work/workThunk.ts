
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWork = createAsyncThunk(
  "work/fetch",
  async () => {
    const response = await fetch("http://localhost:8000/work", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  },
);

export const saveWork = createAsyncThunk(
  "work/save",
  async (work: string) => {
    const createdAt = new Date().toISOString();  // Set waktu pembuatan
    const response = await fetch("http://localhost:8000/work", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        work,
        createdAt,
      }),
    });
    const data = await response.json();
    return data;
  },
);
