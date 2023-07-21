import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Home() {
  const { user } = useContext(AuthContext);
  console.log("user : ", user);
  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
}

export default Home;
