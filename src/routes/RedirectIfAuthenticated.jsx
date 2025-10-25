import { Outlet, Navigate } from "react-router-dom";

function RedirectIfAuthenticated() {
  const storedUser = localStorage.getItem("authUser");
  const user = storedUser ? JSON.parse(storedUser) : null; // ✅ safe parse

  if (user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default RedirectIfAuthenticated;
