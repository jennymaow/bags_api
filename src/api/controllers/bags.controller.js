const Bag = require('../models/bag.model');

const getAllBags = async (req, res, next) => {
  try {
    const bags = await Bag.find();
    return res.status(200).json(bags);
  } catch (error) {
    return next(error);
  }
};

const getBagByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bag = await Bag.findById(id);
    return res.status(200).json(bag);
  } catch (error) {
    return next(error);
  }
};

const createBags = async (req, res, next) => {
  try {
    const newBag = new Bag(req.body);
    const createdBag = await newBag.save();
    return res.status(201).json(createdBag);
  } catch (error) {
    return next(error);
  }
};

const updateBag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBag = await Bag.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(updatedBag);
  } catch (error) {
    return next(error);
  }
};

const deleteBag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBag = await Bag.findByIdAndDelete(id);
    return res.status(200).json(deletedBag);
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  getAllBags,
  getBagByID,
  updateBag,
  deleteBag,
  createBags,
};
