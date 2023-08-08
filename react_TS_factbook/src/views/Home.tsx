import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Home() {
  const { user } = useContext(AuthContext);
  console.log("user : ", user);
  return (
    <div
      style={{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1586024844218-3fb8999ef6cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.9,
        minHeight: "100vh",
      }}
    >
      <h1>Home</h1>
      <h2>
        Welcome to our website, a dynamic platform dedicated to fostering
        discourse and providing valuable information about state actors in the
        Southeast Asian region, with a particular focus on the South China Sea
        dispute.
      </h2>
      <h2>
        Our website serves as a hub for individuals, academics, policymakers,
        and anyone interested in gaining a comprehensive understanding of the
        South China Sea dispute. We aim to provide a balanced and unbiased
        platform that encourages open dialogue and the exchange of ideas.
        Through in-depth analysis, research papers, expert opinions, and curated
        news articles, we strive to shed light on the historical, legal,
        economic, and geopolitical aspects of the dispute.
      </h2>
    </div>
  );
}

export default Home;
