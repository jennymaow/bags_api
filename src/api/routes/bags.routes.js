const express = require('express');

const BagRoutes = express.Router();

const {
  getAllBags,
  getBagByID,
  updateBag,
  deleteBag,
  createBags,
} = require('../controllers/bags.controller');

BagRoutes.get('/', getAllBags);
BagRoutes.get('/:id', getBagByID);
BagRoutes.delete('/:id', deleteBag);
BagRoutes.post('/', createBags);
BagRoutes.put('/:id', updateBag);

module.exports = BagRoutes;
