const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/dataBase");
const userRoutes = require("./routes/userRoutes");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Middleware
app.use(express.json()); // For parsing JSON requests
app.use(cookieParser()); // To parse cookies

// Database connection
connectDB();

// Routes
app.use("/api/users", userRoutes);

// Root route for testing
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});