import { createContext } from "react";
import { User } from "../types/countryInfoTypes";

interface ContextType {
  user: User | "No provider";
}

const defaultValue: ContextType = {
  user: "No provider",
};

export const AuthContext = createContext(defaultValue);
