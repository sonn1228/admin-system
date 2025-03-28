// app/store.js
import { configureStore } from "@reduxjs/toolkit";
// import friendshipReducer from './slices/friendshipSlice';

const store = configureStore({
  reducer: {
    // friendship: friendshipReducer,
  },
});

export default store;
