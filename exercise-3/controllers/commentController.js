'use strict';

const Models = require('../models');

const getCommentsForPost = (req, res) => {
  Models.Comment.findAll({
    where: { post_id: req.params.postId },
    include: [Models.User],
  })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const createComment = (req, res) => {
  Models.Comment.create(req.body)
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  getCommentsForPost,
  createComment,
};
