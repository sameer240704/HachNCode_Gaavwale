import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    image: {
      type: String,
      default: "",
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
