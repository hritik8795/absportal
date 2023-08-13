const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, default: "" },
    companyName: { type: String, default: "", required: true },
    mobileNumber: { type: String, default: "" },

    companyAddress: { type: String, default: "" },
    aboutCompany: { type: String, default: "" },
  },
  { timestamps: true }
);

const employerModal = new mongoose.model("employers", userSchema);

module.exports = employerModal;
