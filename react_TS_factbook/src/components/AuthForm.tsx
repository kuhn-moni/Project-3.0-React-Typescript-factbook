import { type FormEvent, useState } from "react";
import { Form } from "react-router-dom";

type Props = {
  title: string;
  handleSubmit: (
    e: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => void;
};

const AuthForm = ({ title, handleSubmit }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h1>{title}</h1>
      <Form
        onSubmit={(e) => handleSubmit(e, email, password)}
        style={{ display: "flex", flexDirection: "column", gap: "1em" }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email here..."
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password here..."
        />
        <button type="submit">{title}</button>
      </Form>
    </>
  );
};

export default AuthForm;
