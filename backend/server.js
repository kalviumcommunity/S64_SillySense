require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Home Route with Database Connection Status
app.get("/", async (req, res) => {
  const dbStatus = mongoose.connection.readyState;
  let statusMessage = "";

  switch (dbStatus) {
    case 0:
      statusMessage = "🔴 Disconnected";
      break;
    case 1:
      statusMessage = "🟢 Connected";
      break;
    case 2:
      statusMessage = "🟡 Connecting";
      break;
    case 3:
      statusMessage = "🛑 Disconnecting";
      break;
    default:
      statusMessage = "❓ Unknown Status";
  }

  res.json({ message: "Welcome to Silly Sense!", database_status: statusMessage });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});