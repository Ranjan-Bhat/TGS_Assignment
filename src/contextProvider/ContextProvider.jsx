import { createContext, useState, useContext } from "react";

const LoginContext = createContext(null);

export const useData = () => {
  return useContext(LoginContext);
};

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  return (
    <LoginContext.Provider value={{ name, setName }}>
      {children}
    </LoginContext.Provider>
  );
};
