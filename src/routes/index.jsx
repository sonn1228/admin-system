import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "@/routes/publicRoutes";
import { privateRoutes } from "@/routes/privateRoutes";
import AdminLayout from "@/layouts/AdminLayout";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}

      {/* Private Routes wrapped in AdminLayout */}
      <Route element={<AdminLayout />}>
        {privateRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default AppRoutes;
