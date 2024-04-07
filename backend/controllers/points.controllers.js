import User from "../models/user.models.js";

export const updatePoints = async (req, res) => {
  try {
    const { username, points } = req.body;

    console.log(username, points);
    // Find the user by userId
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's points
    user.points = points;

    // Save the updated user
    await user.save();

    return res.status(200).json({ message: "Points updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const getPoints = async (req, res) => {
  try {
    // Find the user by userId
    const user = await User.find().sort({ points: -1 });
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      username: user.username,
      points: user.points,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
