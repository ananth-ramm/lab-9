'use strict';

const Models = require('../models');

const getLikesForPost = (req, res) => {
  Models.Like.findAll({
    where: { post_id: req.params.postId },
    include: [Models.User],
  })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const createLike = (req, res) => {
  Models.Like.create(req.body)
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const deleteLike = (req, res) => {
  Models.Like.destroy({
    where: {
      user_id: req.params.userId,
      post_id: req.params.postId,
    },
  })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  getLikesForPost,
  createLike,
  deleteLike,
};
