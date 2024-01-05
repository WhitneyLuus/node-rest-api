const { model } = require("mongoose");

const mongoose = require("mongoose");
const { CommentSchema } = require("./Comment"); //Import CommentSchema from comment.js

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    txtPost: {
      type: String,
    },
    imgPost: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
    Comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  //Updates timestamps whenever a user is created
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = mongoose.model("Post", PostSchema);
