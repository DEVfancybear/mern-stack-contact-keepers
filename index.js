const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
connectDB();
app.use(cors());
// Init Middleware
app.use(express.json());
app.get("/", (req, res) => {
    res.json({msg: "Welcome to Backend API"})
})
// Define Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/contacts", require("./routes/api/contacts"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));