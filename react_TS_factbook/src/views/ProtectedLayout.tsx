import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

type Props = {
  children: React.ReactNode;
};

function ProtectedLayout({ children }: Props) {
  const { user } = useContext(AuthContext);

  return <>{user ? children : <div>Restricted Content</div>}</>;
}

export default ProtectedLayout;
