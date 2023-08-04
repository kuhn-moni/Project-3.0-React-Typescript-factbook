import { useState, type FormEvent, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { ChatMsg, ChatMsgWithId } from "../types/countryInfoTypes";

function Chat() {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1em",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    background: "lightgray",
    padding: " 10px",
  };
  const { user } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState("");
  const [existingMessages, setExsistingMessages] = useState<ChatMsgWithId[]>(
    []
  );
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMessage: ChatMsg = {
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
      const msgToAdd: ChatMsgWithId = {
        ...newMessage,
        id: docRef.id,
      };
      setExsistingMessages([...existingMessages, msgToAdd]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const getChatDocs = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, "chat"), orderBy("date"))
      );
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
      <h1>Discourse Forum</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          overflow: "scroll",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid slategray",
          padding: "25px ",
          borderRadius: "25px",
          backgroundColor: "white",
          width: "50vw",
          maxWidth: "600px",
          height: "100%",
        }}
      >
        {existingMessages.map((msg) => {
          return (
            <div
              className="mb-3"
              key={msg.id}
              style={{
                padding: "0 10em ",
                border: "solid 2px gray",
                borderRadius: "25px",
                width: "40vw",
                maxWidth: " 500px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <h5>{msg.author}</h5>
                <i>{msg.date}</i>
              </div>
              <p style={{ wordWrap: "break-word", width: "100%" }}>
                {msg.text}
              </p>
            </div>
          );
        })}
        <div>
          <form
            onSubmit={(e) => void handleSubmit(e)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <textarea
              placeholder="write a message!"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{
                borderRadius: "15px",
                padding: "10px",
                width: "30vw",
                backgroundColor: "white",
                color: "black",
              }}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
