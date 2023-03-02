const Brand = require('../models/brand.model');

const getAllBrand = async (req, res, next) => {
  try {
    const brands = await Brand.find().populate('bags');
    return res.status(200).json(brands);
  } catch (error) {
    return next(error);
  }
};

const getBrandByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findById(id);
    return res.status(200).json(brand);
  } catch (error) {
    return next(error);
  }
};

const createBrands = async (req, res, next) => {
  try {
    const newBrand = new Brand(req.body);
    const createdBrand = await newBrand.save();
    return res.status(201).json(createdBrand);
  } catch (error) {
    return next(error);
  }
};

const updateBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(updatedBrand);
  } catch (error) {
    return next(error);
  }
};

const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBrand = await Brand.findByIdAndDelete(id);
    return res.status(200).json(deletedBrand);
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  getAllBrand,
  getBrandByID,
  updateBrand,
  deleteBrand,
  createBrands,
};
