const Models = require("../models");

const createUser = (req, res) => {
  Models.User.create(req.body)
    .then(data => res.send({ result: 200, data }))
    .catch(err => res.send({ result: 500, error: err.message }));
};

const getUsers = (req, res) => {
  Models.User.find({})
    .then(data => res.send({ result: 200, data }))
    .catch(err => res.send({ result: 500, error: err.message }));
};

module.exports = { createUser, getUsers };
