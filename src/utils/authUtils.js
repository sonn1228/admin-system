import { jwtDecode } from "jwt-decode";

export const getAuthHeaders = () => {
  const token = localStorage.getItem("jwt");
  return { Authorization: `Bearer ${token}` };
};

const token = localStorage.getItem("jwt");

if (token) {
  try {
    const decoded = jwtDecode(token);
    console.log("Decoded JWT:", decoded);
  } catch (error) {
    console.error("Invalid token:", error);
  }
}
