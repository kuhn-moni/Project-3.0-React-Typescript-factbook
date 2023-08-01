import { useState, type FormEvent, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Chat() {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1em",
  };
  const { user } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMessage = {
      author: user!.email!,
      date: Date.now(),
      text: inputValue,
    };
    console.log("new message", newMessage);
  };
  return (
    <div style={containerStyle}>
      <h1>Chat/Forum!</h1>
      <div>here will go messages....</div>
      <form onSubmit={handleSubmit} style={containerStyle}>
        <textarea
          placeholder="write a message!"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Chat;
