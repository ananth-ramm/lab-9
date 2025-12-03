'use strict';

const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

router.get('/', (req, res) => {
  Controllers.postController.getPosts(req, res);
});

router.get('/user/:userId', (req, res) => {
  Controllers.postController.getPostsByUser(req, res);
});

router.post('/create', (req, res) => {
  Controllers.postController.createPost(req, res);
});

module.exports = router;
