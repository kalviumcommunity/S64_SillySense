const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// 🟢 Define Schema Directly Here
const jokeSchema = new mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, required: true }
});

const Joke = mongoose.model("Joke", jokeSchema);

// 🟢 CREATE - Add a new joke
router.post("/jokes", async (req, res) => {
  try {
    const joke = new Joke(req.body);
    await joke.save();
    res.status(201).json({ message: "Joke added successfully!", joke });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔵 READ - Get all jokes
router.get("/jokes", async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔵 READ - Get a single joke by ID
router.get("/jokes/:id", async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) return res.status(404).json({ error: "Joke not found" });
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🟡 UPDATE - Update a joke by ID
router.put("/jokes/:id", async (req, res) => {
  try {
    const joke = await Joke.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!joke) return res.status(404).json({ error: "Joke not found" });
    res.json({ message: "Joke updated successfully!", joke });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔴 DELETE - Remove a joke by ID
router.delete("/jokes/:id", async (req, res) => {
  try {
    const joke = await Joke.findByIdAndDelete(req.params.id);
    if (!joke) return res.status(404).json({ error: "Joke not found" });
    res.json({ message: "Joke deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;