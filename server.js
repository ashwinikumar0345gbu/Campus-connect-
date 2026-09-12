const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("CampusConnect Backend is Running 🚀");
});

app.listen(PORT, () => {
  console.log(`CampusConnect server running on port ${PORT}`);
});
