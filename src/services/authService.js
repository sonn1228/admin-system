import httpRequest from "@/config/axios"; // Import httpRequest đã config từ file axios

const authService = {
  // Hàm đăng nhập
  login: (username, password) =>
    httpRequest.post("/auth/login", {
      username,
      password,
    }),

  // Hàm đăng ký
  register: (username, password) =>
    httpRequest.post("/auth/register", {
      username,
      password,
    }),

  // Hàm lấy access token
  getAccessToken: (username, password) =>
    httpRequest.post("/auth/token", {
      username,
      password,
    }),
};

export default authService;
