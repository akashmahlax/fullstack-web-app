const mongoose = require('mongoose');

// Define a schema for the Product model
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Export the Product model
module.exports = mongoose.model('product', productSchema);