import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Permission from "@/pages/Permission";
import Role from "@/pages/Role";
import User from "@/pages/User";

export const privateRoutes = [
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/users", element: <User /> },
  { path: "/roles", element: <Role /> },
  { path: "/permissions", element: <Permission /> },
];
