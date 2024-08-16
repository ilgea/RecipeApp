import { Navigate, Outlet } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
  const { currentUser } = useLoginContext();
  // const { currentUser } = useLoginContext();
  // console.log("user", user);
  // const user = true;
  // const user = false;
  // console.log(user?.email.length > 0);

  // return user?.email.length > 0 ? <Outlet /> : <Navigate to="/login" />;
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;
