'use strict';

const Models = require('../models');

const getPosts = (req, res) => {
  Models.Post.findAll({
    include: [Models.User, Models.Category],
  })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const getPostsByUser = (req, res) => {
  Models.Post.findAll({
    where: { user_id: req.params.userId },
    include: [Models.User],
  })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const createPost = (req, res) => {
  Models.Post.create(req.body)
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPosts,
  getPostsByUser,
  createPost,
};
