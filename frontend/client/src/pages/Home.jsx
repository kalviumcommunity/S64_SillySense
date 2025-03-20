import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations

const Home = () => {
  const [joke, setJoke] = useState(""); // Store the joke
  const [loading, setLoading] = useState(false); // Show loading state

  // Function to fetch a random joke from an API
  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Oops! Couldn't fetch a joke. Try again!");
    }
    setLoading(false);
  };

  // Fetch a joke when the page loads
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={styles.container}>
      <motion.div 
        style={styles.content}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 style={styles.header}>Silly Sense 🤣</h1>
        <p style={styles.subHeader}>Your daily dose of laughter, Reddit style.</p>

        <motion.div 
          style={styles.jokeContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          {loading ? <p style={styles.jokeText}>Loading joke...</p> : <p style={styles.jokeText}>{joke}</p>}
        </motion.div>

        <motion.button
          onClick={fetchJoke}
          style={styles.button}
          whileHover={{ scale: 1.1, backgroundColor: "#E03D00" }} // Darker hover effect
          whileTap={{ scale: 0.9 }}
        >
          🔄 Get Another Joke
        </motion.button>
      </motion.div>
    </div>
  );
};

// Full-Screen Reddit-Inspired Styling (No Glow)
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full height of the viewport
    width: "100vw",  // Full width of the viewport
    backgroundColor: "#1A1A1B", // Dark Reddit-style background
    padding: "20px",
  },
  content: {
    textAlign: "center",
    padding: "40px",
    maxWidth: "600px",
    width: "100%", // Responsive width
    backgroundColor: "#292929",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  header: {
    fontSize: "2.5rem",
    color: "#FF4500", // Reddit Orange
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subHeader: {
    fontSize: "1.2rem",
    color: "#FFC107", // Yellow touch
    marginBottom: "20px",
  },
  jokeContainer: {
    padding: "20px",
    backgroundColor: "#373737",
    borderRadius: "10px",
    marginBottom: "20px",
    transition: "transform 0.3s ease-in-out",
  },
  jokeText: {
    fontSize: "1.3rem",
    color: "#D7DADC", // Reddit light grey
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#FF4500", // Reddit Orange
    color: "#FFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default Home;