const mongoose = require("mongoose");
const clothingItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  weather: { type: String, required: true },
  imageUrl: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("clothingItem", clothingItemSchema);
