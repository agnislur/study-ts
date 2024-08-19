import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userSlice'; // Sesuaikan path sesuai dengan struktur direktori

const store = configureStore({
  reducer: {
    form: formReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
