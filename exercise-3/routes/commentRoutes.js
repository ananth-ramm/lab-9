'use strict';

const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

router.get('/post/:postId', (req, res) => {
  Controllers.commentController.getCommentsForPost(req, res);
});

router.post('/create', (req, res) => {
  Controllers.commentController.createComment(req, res);
});

module.exports = router;
