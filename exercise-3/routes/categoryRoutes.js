'use strict';

const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

router.get('/', (req, res) => {
  Controllers.categoryController.getCategories(req, res);
});

router.post('/create', (req, res) => {
  Controllers.categoryController.createCategory(req, res);
});

module.exports = router;
