import { useState, type FormEvent, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { ChatMsg, ChatMsgWithId } from "../types/countryInfoTypes";

function Chat() {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1em",
  };
  const { user } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState("");
  const [existingMessages, setExsistingMessages] = useState<ChatMsgWithId[]>(
    []
  );
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
  useEffect(() => {
    const getChatDocs = async () => {
      const querySnapshot = await getDocs(collection(db, "chat"));
      console.log("querySnapshot", querySnapshot);
      const messageArray: ChatMsgWithId[] = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
        const data = doc.data() as ChatMsg;
        messageArray.push({ id: doc.id, ...data });
      });
      setExsistingMessages(messageArray);
      console.log("messagesArray", messageArray);
    };
    getChatDocs().catch((e) => console.log(e));
  }, []);

  return (
    <div style={containerStyle}>
      <h1>Chat/Forum!</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          overflow: "auto",
        }}
      >
        {existingMessages.map((msg) => {
          return (
            <div
              key={msg.id}
              style={{ padding: "0 10em ", border: "solid 2px gray" }}
            >
              <h5>{msg.author}</h5>
              <i>{msg.date}</i>
              <p>{msg.text}</p>
            </div>
          );
        })}
      </div>
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
