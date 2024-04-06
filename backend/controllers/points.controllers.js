import User from "../models/user.models.js";
import User from "../models/user.models.js";

const updatePoints = async (req, res) => {
  try {
    const { userId, points } = req.body;

    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's points
    user.points = points;

    // Save the updated user
    await user.save();

    return res.status(200).json({ message: "Points updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default updatePoints;
