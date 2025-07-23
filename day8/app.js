const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(express.json());

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/day8DB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ DB Error:", err));

// Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});