// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout } from "../middlewares/authMiddleware";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    // Có thể giữ lại các reducer đồng bộ nếu cần
  },
  extraReducers: (builder) => {
    // Xử lý login
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("action.payload: ", action.payload);
        
        state.loading = false;
        state.user = action.payload.user || null; // Giả sử API trả về user object
        state.token = action.payload.data.token; // Token từ response
        localStorage.setItem("jwt", action.payload.data.token); // Lưu token vào localStorage
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Lỗi từ rejectWithValue
      })

      // Xử lý register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        // Không cập nhật user/token vì register thường không trả về token ngay
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Xử lý logout
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Logout failed";
      });
  },
});

export default authSlice.reducer;
