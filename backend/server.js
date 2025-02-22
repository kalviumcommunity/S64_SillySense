const express = require("express");
const app = express();
const PORT = 3000;

// Define a simple /ping route
app.get("/ping", (req, res) => {
    res.json({ message: "Pong! 🏓" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});