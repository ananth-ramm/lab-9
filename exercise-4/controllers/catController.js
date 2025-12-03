"use strict";

const axios = require("axios");

const getRandomFact = async (req, res) => {
  try {
    const apiRes = await axios.get("https://catfact.ninja/fact");

    res.send({
      result: 200,
      fact: apiRes.data.fact
    });
  } catch (err) {
    console.error(err);
    res.send({ result: 500, error: err.message });
  }
};

const getMultipleFacts = async (req, res) => {
  try {
    const limit = req.query.limit || 1;

    const apiRes = await axios.get(`https://catfact.ninja/facts?limit=${limit}`);

    res.send({
      result: 200,
      facts: apiRes.data.data
    });
  } catch (err) {
    console.error(err);
    res.send({ result: 500, error: err.message });
  }
};

const getFactById = (req, res) => {
  const id = req.params.id;

  res.send({
    result: 200,
    id,
    message: ` You requested cat fact #${id}.`
  });
};

module.exports = {
  getRandomFact,
  getMultipleFacts,
  getFactById
};
