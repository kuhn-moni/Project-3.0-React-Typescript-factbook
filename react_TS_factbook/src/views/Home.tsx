import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Home() {
  const { user } = useContext(AuthContext);
  console.log("user : ", user);
  return (
    <div>
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
