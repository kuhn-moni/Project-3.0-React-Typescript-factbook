import { createContext, useState, type FormEvent, useEffect } from "react";
import {
  type User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

interface ContextType {
  user: User | null;
  handleLoginSubmit: (
    e: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => void;
  logout: () => void;
  handleRegisterSubmit: (
    e: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => void;
}

const defaultValue: ContextType = {
  user: "No provider",
  handleLoginSubmit: () => {
    throw Error("No provider");
  },
  logout: () => {
    throw Error("No provider");
  },
  handleRegisterSubmit: () => {
    throw Error("No provider");
  },
};

export const AuthContext = createContext(defaultValue);

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider = (props: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log("error logging out", error);
      });
  };

  const handleRegisterSubmit = (
    e: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("new user", user);
        setUser(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log("caught error", error);
      });
  };

  const handleLoginSubmit = (
    e: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error);
      });
  };

  const checkActiveUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser(user);
        // ...
      } else {
        setUser(null);
        // User is signed out
        // ...
      }
    });
  };

  useEffect(() => {
    checkActiveUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, handleLoginSubmit, logout, handleRegisterSubmit }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
