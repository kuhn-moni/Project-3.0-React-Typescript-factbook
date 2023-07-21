import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Home() {
  const contextValue = useContext(AuthContext);
  console.log("context :>> ", contextValue);
  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
}

export default Home;
