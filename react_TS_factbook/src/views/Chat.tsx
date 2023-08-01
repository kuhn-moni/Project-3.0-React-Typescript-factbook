function Chat() {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1em",
  };
  return (
    <div style={containerStyle}>
      <h1>Chat/Forum!</h1>
      <div>here will go messages....</div>
      <form style={containerStyle}>
        <textarea placeholder="write a message!" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Chat;
