const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/dataBase");
const userRoutes = require("./routes/userRoutes");
const resourceRoutes = require("./routes/resourceRoutes");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:3000", // Frontend URL
  credentials: true,               // Allow cookies
}));

// Middleware
app.use(express.json()); // For parsing JSON requests
app.use(cookieParser()); // To parse cookies

// Database connection
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/resources", resourceRoutes); // Add route for resources

// Root route for testing
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
