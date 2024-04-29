import { Navigate, useLocation } from "react-router-dom";
import ProtoTypes from "prop-types";
import Spinner from "../components/shared/Spinner";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, authLoading } = useAuth();
  const location = useLocation();
  if (authLoading) return <Spinner />;
  if (user) return children;
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoutes.propTypes = {
  children: ProtoTypes.node.isRequired,
};

export default PrivateRoutes;
