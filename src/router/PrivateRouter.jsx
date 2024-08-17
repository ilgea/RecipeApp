import { Navigate, Outlet } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
  const { currentUser } = useLoginContext();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
