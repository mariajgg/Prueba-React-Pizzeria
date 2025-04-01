import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PublicRoute = ({ children }) => {
  const { token } = useContext(UserContext);

  return token ? <Navigate to="/" /> : children;
};

export default PublicRoute;
