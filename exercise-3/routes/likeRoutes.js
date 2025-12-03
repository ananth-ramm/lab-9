'use strict';

const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

router.get('/post/:postId', (req, res) => {
  Controllers.likeController.getLikesForPost(req, res);
});

router.post('/create', (req, res) => {
  Controllers.likeController.createLike(req, res);
});

router.delete('/:userId/:postId', (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

module.exports = router;
