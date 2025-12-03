const Models = require("../models");

const createComment = (req, res) => {
  Models.Comment.create(req.body)
    .then(data => res.send({ result: 200, data }))
    .catch(err => res.send({ result: 500, error: err.message }));
};

module.exports = { createComment };
