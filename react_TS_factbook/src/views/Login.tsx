import AuthForm from "../components/AuthForm";

const Login = () => {
  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("logged in");
  };

  const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Register new user");
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
