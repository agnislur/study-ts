import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from './userTypes'

// fetchUser mengambil data dari server 
export const fetchUser = createAsyncThunk(
  "user/fetch",
  async () => {
    const response = await fetch("http://localhost:8000/user");
    const data = await response.json();
    return data;
  },
);

// saveUser mengirim data user ke server
export const saveUser = createAsyncThunk(
  'user/save',
  async (user: User) => {
    const response = await fetch('http://localhost:8000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  }
);
