const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes"); // Import CRUD Routes

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(error => console.error("❌ MongoDB Connection Error:", error.message));

// ✅ Use the CRUD Routes
app.use("/api", routes);

app.get("/", (req, res) => res.send("Welcome to Silly Sense API!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

