import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/gaavwale/image/upload/v1712424179/public/yry7ozpoahe776ebzhd7.jpg",
    },
    details: {
      type: String,
      required: true,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
export default Post;
