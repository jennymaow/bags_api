const express = require('express');

const BrandRoutes = express.Router();

const {
  getAllBrand,
  getBrandByID,
  updateBrand,
  deleteBrand,
  createBrands,
} = require('../controllers/brands.controller');

BrandRoutes.get('/', getAllBrand);
BrandRoutes.get('/:id', getBrandByID);
BrandRoutes.delete('/:id', deleteBrand);
BrandRoutes.post('/', createBrands);
BrandRoutes.put('/:id', updateBrand);

module.exports = BrandRoutes;
