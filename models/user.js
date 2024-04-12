const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    accountType: {
      type: String,
      enum: ["Paid", "Trial", "Expired", "Unknown"],
    },
    lastActive: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, bufferCommands: false, autoCreate: false }
);

const userModel = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = userModel;
