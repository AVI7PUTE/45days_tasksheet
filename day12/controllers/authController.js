const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let refreshTokens = []; // Store refresh tokens in memory (for demo)

const generateAccessToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};

const generateRefreshToken = (user) => {
  const refreshToken = jwt.sign({ id: user._id, email: user.email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" });
  refreshTokens.push(refreshToken);
  return refreshToken;
};

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.json({ message: "✅ User Registered" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Refresh Token
exports.refresh = (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(401).json({ message: "Refresh token required" });
  if (!refreshTokens.includes(token)) return res.status(403).json({ message: "Invalid refresh token" });

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token expired or invalid" });

    const accessToken = generateAccessToken(user);
    res.json({ accessToken });
  });
};

// Logout
exports.logout = (req, res) => {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter(t => t !== token);
  res.json({ message: "✅ Logged out" });
};
