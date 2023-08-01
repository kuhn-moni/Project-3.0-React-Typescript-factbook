import AuthForm from "../components/AuthForm";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { handleRegisterSubmit, handleLoginSubmit } = useContext(AuthContext);

  return (
    <div>
      <AuthForm title={"Login"} handleSubmit={handleLoginSubmit} />
      <hr />
      <AuthForm title={"Register"} handleSubmit={handleRegisterSubmit} />
    </div>
  );
};

export default Login;
