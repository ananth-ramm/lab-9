const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  likedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Like", likeSchema);
