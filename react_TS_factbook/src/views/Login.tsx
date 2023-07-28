import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <div>
      <AuthForm
        title={"Login"}
        handleSubmit={() => console.log("logging in")}
      />
      <hr />
      <AuthForm
        title={"Register"}
        handleSubmit={() => console.log("Register new user")}
      />
    </div>
  );
};

export default Login;
