const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

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
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
    //
    app.get("*", (req, res) => {
        res.sendfile(path.join((__dirname = "client/build/index.html")));
    });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));