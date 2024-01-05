const { model } = require("mongoose");

const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema(
  {
    postId: { Type: String },
    userId: { Type: String },
    commentId: { Type: String },
    text: { Type: String },
  }, //Updates timestamps whenever a user is created
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = { Comment, CommentSchema };
