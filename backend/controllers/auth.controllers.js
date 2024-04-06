import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const registerUser = asyncHandler(async (req, res, next) => {
  try {
    const {
      name,
      username,
      password,
      confirmPassword,
      profilePic,
      email,
      standard,
      school,
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // HASH PASSWORD HERE
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);
    const avatarLocalPath = profilePic;

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    console.log(avatar);

    const newUser = new User({
      name,
      username,
      password,
      email,
      profilePic: avatar
        ? avatar
        : "https://res.cloudinary.com/gaavwale/image/upload/v1712414241/public/szwigkyzs9xvoagviu8t.png",
      standard,
      school,
    });

    if (newUser) {
      // Generate JWT token here
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.name,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ username, email });
    // const isPasswordCorrect = await bcrypt.compare(
    //   password,
    //   user?.password || ""
    // );

    if (!user || !password) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    if (user.password !== password) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json(new ApiResponse(200, "Logged Out Successfully"));
});
