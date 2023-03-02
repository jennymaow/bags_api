const mongoose = require('mongoose');

const BrandSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    founder: { type: String, required: true },
    year: { type: Number, required: true },
    image: { type: String, required: true },
    bags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bag' }],
  },
  {
    timestamps: true,
  },
);

const Brand = mongoose.model('Brand', BrandSchema);
module.exports = Brand;
