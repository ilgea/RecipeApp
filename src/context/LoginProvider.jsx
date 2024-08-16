import { createContext, useContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

export const LoginContext = createContext();

export const useLoginContext = () => {
  return useContext(LoginContext);
};

const LoginContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <LoginContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
