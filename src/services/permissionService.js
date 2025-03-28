import httpRequest from "@/config/axios"; // Import httpRequest đã config từ file axios
import { getAuthHeaders } from "@/utils/authUtils";

const permissionService = {
  getAllPermission: () =>
    httpRequest.get("/permissions", {
      headers: getAuthHeaders(),
    }),
};

export default permissionService;
