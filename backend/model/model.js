const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const itemSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: "true",
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Item = new mongoose.model("Product", itemSchema);
const Category = new mongoose.model("Category", categorySchema);
const User = new mongoose.model("User", userSchema);

module.exports = {
  Item,
  Category,
  User,
};
