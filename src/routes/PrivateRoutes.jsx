import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  const storedUser = localStorage.getItem("authUser");
  const user = storedUser ? JSON.parse(storedUser) : null; // ✅ safe parse

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
