const bcryptjs = require("bcryptjs");
const User = require("../models/user.model.js");
const { generateTokenAndSetCookie } = require("../../utils/generateToken.js");

async function signup(req, res, next) {
  try {
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: "Please provide all fields" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    const existingUserByEmail = await User.findOne({ email: email });
    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const existingUserByName = await User.findOne({ name: name });
    if (existingUserByName) {
      return res
        .status(400)
        .json({ message: "User with this name already exists" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
      name,
    });

    const token = generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    res.status(201).json({
      success: true,
      user: {
        ...newUser._doc,
        password: "",
        token,
      },
    });
  } catch (error) {
    console.log("Error in signup controller: ", error.message);
    res.status(500).json({ succes: false, message: "Internal server error" });
  }
}
async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      success: true,
      user: {
        ...user._doc,
        password: "",
        token,
      },
    });
  } catch (error) {
    console.log("Error in login controller: ", error.message);
    res.status(500).json({ succes: false, message: "Internal server error" });
  }
}
function logout(req, res, next) {
  try {
    res.clearCookie("jwt-healthy");

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.log("Error in logout controller: ", error.message);
    res.status(500).json({ succes: false, message: "Internal server error" });
  }
}

function authCheck(req, res, next) {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    console.log("Error in authCheck controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

module.exports = { signup, login, logout, authCheck };
