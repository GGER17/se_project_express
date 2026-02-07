const mongoose = require("mongoose");
const validator = require("validator");
const clothingItemSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 30 },
  weather: {
    type: String,
    required: [true, "The weather field is required"],
    validate: {
      validator: (v) =>
        ["hot", "warm", "cold"].includes(v.trim().toLowerCase()),
      message: "Weather must be hot, warm, or cold",
    },
  },
  imageUrl: {
    type: String,
    required: [true, "The imageUrl field is required"],
    validate: {
      validator: (v) =>
        validator.isURL(v, {
          require_protocol: true,
          allow_underscores: true,
          allow_trailing_dot: true,
        }),
      message: "Link is not Valid",
    },
  },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user", default: [] }],
  createdAt: { type: Date, default: Date.now, required: true },
});
module.exports = mongoose.model("clothingItem", clothingItemSchema);
