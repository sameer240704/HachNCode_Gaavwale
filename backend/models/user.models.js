import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default:
        "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1624426478/ecommerce/avatars/avatar-1_ayf4uq.png",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

export default User;
