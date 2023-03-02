const mongoose = require('mongoose');

const BagSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Bag = mongoose.model('Bag', BagSchema);
module.exports = Bag;
