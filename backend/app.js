const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;

// mongoose
//   .connect("mongodb://127.0.0.1:27017/inventoryExpress", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((error) => console.error("MongoDB connection error:", error));

app.get("/", (req, res) => {
  res.status(200).json({ id: 1, name: "sexy whore" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
