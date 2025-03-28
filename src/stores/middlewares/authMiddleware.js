import authService from "@/services/authService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    const response = await authService.login(username, password);
    return response; // Trả về data từ authService
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, password }, { rejectWithValue }) => {
    const response = await authService.register(username, password);
    return response; // Trả về response từ authService
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  return;
});
