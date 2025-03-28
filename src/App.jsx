import { Toaster } from "react-hot-toast";
import AppRoutes from "@/routes";
import React, { useEffect } from "react";
import httpRequest from "@/config/axios";
import { successToast } from "@/utils/toast";
import authService from "@/services/authService";
function App() {
  useEffect(() => {
    const fetchApi = async () => {
      const resx = await authService.login("admin", "admin");
      console.log(resx);
    };
    fetchApi();
  }, []);

  return (
    <div>
      {/* <AdminLayout/> */}
      <AppRoutes />
      <Toaster />
    </div>
  );
}

export default App;
