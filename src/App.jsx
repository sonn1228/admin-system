import { Toaster } from "react-hot-toast";
import AppRoutes from "@/routes";
import React from "react";
function App() {
  return (
    <div>
      {/* <AdminLayout/> */}
      <AppRoutes />
      <Toaster />
    </div>
  );
}

export default App;
