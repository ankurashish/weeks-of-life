import { Navigate } from "react-router-dom";

export default function Redirector() {
  const token = localStorage.getItem("token");
  return <Navigate to={token ? "/dashboard" : "/login"} replace />;
}
