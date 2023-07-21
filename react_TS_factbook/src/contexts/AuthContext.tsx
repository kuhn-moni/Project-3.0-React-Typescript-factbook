import { createContext, useState } from "react";
import { User } from "../types/countryInfoTypes";

interface ContextType {
  user: User | "No provider";
}

const defaultValue: ContextType = {
  user: "No provider",
};

export const AuthContext = createContext(defaultValue);

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider = (props: Props) => {
  const [user, setUser] = useState(false);

  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  );
};
