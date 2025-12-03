const Models = require("../models");

const likePost = (req, res) => {
  Models.Like.create(req.body)
    .then(data => res.send({ result: 200, data }))
    .catch(err => res.send({ result: 500, error: err.message }));
};

module.exports = { likePost };
