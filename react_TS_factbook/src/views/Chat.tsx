import { useState, type FormEvent, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function Chat() {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1em",
  };
  const { user } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMessage = {
      author: user!.email!,
      date: Date.now(),
      text: inputValue,
    };
    // console.log("new message", newMessage);
    try {
      const docRef = await addDoc(collection(db, "chat"), newMessage);
      console.log("Document written with ID: ", docRef.id);
      setInputValue("");
      alert("message added");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Chat/Forum!</h1>
      <div>here will go messages....</div>
      <form onSubmit={(e) => void handleSubmit(e)} style={containerStyle}>
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
