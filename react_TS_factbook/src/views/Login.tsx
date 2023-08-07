import AuthForm from "../components/AuthForm";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { handleRegisterSubmit, handleLoginSubmit } = useContext(AuthContext);

  return (
    <>
      <div className="container-fluid" style={{ width: "100vw" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vw",
          }}
        >
          <AuthForm title={"Login"} handleSubmit={handleLoginSubmit} />
          <hr />
          <AuthForm title={"Register"} handleSubmit={handleRegisterSubmit} />
        </div>
      </div>
    </>
  );
};

export default Login;
