const Models = require("../models");

const createPost = (req, res) => {
  Models.Post.create(req.body)
    .then(data => res.send({ result: 200, data }))
    .catch(err => res.send({ result: 500, error: err.message }));
};

const getAllPosts = (req, res) => {
  Models.Post.find({})
    .populate("userId")
    .then(data => res.send({ result: 200, data }))
    .catch(err => res.send({ result: 500, error: err.message }));
};

module.exports = { createPost, getAllPosts };
