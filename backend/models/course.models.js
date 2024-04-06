import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
  {
    name: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      detail: {
        type: String,
        required: true,
      },
      postImg: {
        type: String,
        default: "",
      },
      link: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);

export default Course;
