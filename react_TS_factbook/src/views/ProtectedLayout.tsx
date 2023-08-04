import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

type Props = {
  children: React.ReactNode;
};

function ProtectedLayout({ children }: Props) {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user ? (
        children
      ) : (
        <div>
          <h3>Restricted Content - Please login to view content</h3>
        </div>
      )}
    </>
  );
}

export default ProtectedLayout;
