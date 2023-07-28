import { useState } from "react";

type Props = {
  title: string;
  handleSubmit: () => void;
};

const AuthForm = ({ title, handleSubmit }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>{title}</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AuthForm;
