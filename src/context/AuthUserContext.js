import { createContext, useState } from "react";

const AuthUserContext = createContext();

export const AuthUserContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContext;
