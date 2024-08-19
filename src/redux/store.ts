// store.ts
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  // Tambahkan reducers lain jika ada
});

const store = createStore(rootReducer);

export default store;
