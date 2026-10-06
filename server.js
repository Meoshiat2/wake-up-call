const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/messages", (req, res) => {
  const messages = JSON.parse(fs.readFileSync(path.join(__dirname, "data", "messages.json"), "utf8"));
  res.json(messages);
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "God-first-purpose is live." });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`God-first-purpose running at http://localhost:${PORT}`);
});
