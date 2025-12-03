'use strict';

const Models = require('../models');

const getCategories = (req, res) => {
  Models.Category.findAll()
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const createCategory = (req, res) => {
  Models.Category.create(req.body)
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  getCategories,
  createCategory,
};
