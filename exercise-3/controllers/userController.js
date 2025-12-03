'use strict';

const Models = require('../models');

const getUsers = (req, res) => {
  Models.User.findAll()
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const createUser = (req, res) => {
  Models.User.create(req.body)
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const updateUser = (req, res) => {
  Models.User.update(req.body, {
    where: { user_id: req.params.id },
  })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const deleteUser = (req, res) => {
  Models.User.destroy({
    where: { user_id: req.params.id },
  })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
