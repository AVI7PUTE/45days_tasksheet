const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", require("./routes/authRoutes"));

app.listen(process.env.PORT, () => console.log(`🚀 Server running on port ${process.env.PORT}`));
