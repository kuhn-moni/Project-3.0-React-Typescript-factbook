import AuthForm from "../components/AuthForm";
import { useContext, type FormEvent } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { handleRegisterSubmit } = useContext(AuthContext);
  const handleLoginSubmit = (
    e: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    console.log("logged in");
  };

  return (
    <div>
      <AuthForm title={"Login"} handleSubmit={handleLoginSubmit} />
      <hr />
      <AuthForm title={"Register"} handleSubmit={handleRegisterSubmit} />
    </div>
  );
};

export default Login;
