const { model } = require("mongoose");

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    //required
    name: {
      type: String,
      required: true,
    },
    //required
    surname: {
      type: String,
      required: true,
    },
    //required
    dateOfBirth: {
      type: Date,
      required: true,
    },
    //required
    username: {
      type: String,
      required: true,
      min: 6,
      max: 16,
      unique: true,
    },
    //required
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    //required
    password: {
      type: String,
      required: true,
      min: 8,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    //required
    biography: {
      type: String,
      required: true,
      max: 500,
    },
    profileTags: {
      type: [
        {
          type: String,
          trim: true,
        },
      ],
      validate: {
        validator: function (tags) {
          // Adjust the limit (e.g., 10) based on your requirements
          return tags.length <= 10;
        },
        message: "You are only allowed 10 tags on your profile.",
      },
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  //Updates timestamps whenever a user is created
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
