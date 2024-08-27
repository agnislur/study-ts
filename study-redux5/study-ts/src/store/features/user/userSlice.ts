import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./userTypes";
import { fetchUser, saveUser } from "./userThunk";

// inisial awal 
const initialState: UserState = {
  users: [],
  currentUser: null, 
};

//membuat reducers 
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push({
        id: state.users.length,
        username: action.payload.username,
        email: action.payload.email,
        nohp: action.payload.nohp,
        umur: action.payload.umur,
        password: action.payload.password,
      });
    },
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload; // Mengatur user yang sedang login
    },
  },


  // asynkronous mode

  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    builder.addCase(saveUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
  },
});

// biar functionya bisa di ambil 
export default UserSlice.reducer;
export const { addUser, setCurrentUser } = UserSlice.actions;
