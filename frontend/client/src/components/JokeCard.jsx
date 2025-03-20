import React from "react";

const JokeCard = ({ joke, category, rating }) => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh", // Center vertically
      width: "100%", // Full width
      padding: "20px", // Padding for responsiveness
      backgroundColor: "#1A1A1B", // Reddit Dark Background
    },
    card: {
      border: "2px solid #FF4500", // Reddit Orange Border
      borderRadius: "10px",
      padding: "20px",
      maxWidth: "500px", // Max width for large screens
      width: "90%", // Responsive width for small screens
      background: "#292929", // Dark Background
      textAlign: "center",
      boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)",
    },
    title: {
      color: "#FF4500", // Reddit Orange Title
      marginBottom: "10px",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    text: {
      fontSize: "1.2rem",
      color: "#D7DADC", // Light grey (Reddit-style text)
    },
    rating: {
      fontSize: "1rem",
      color: "#FFC107", // Yellow accent for rating
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.title}>{category} Joke</h3>
        <p style={styles.text}>{joke}</p>
        <p style={styles.rating}>⭐ {rating}/5</p>
      </div>
    </div>
  );
};

// Dummy Data Example
const dummyJoke = {
  joke: "Why don’t skeletons fight each other? They don’t have the guts!",
  category: "Funny",
  rating: 4.5,
};

// Render with Dummy Data
const JokeCardWithDummyData = () => <JokeCard {...dummyJoke} />;

export default JokeCardWithDummyData;