'use strict';

const Mongoose = require('mongoose');

const uri = process.env.DB_URI || "mongodb://127.0.0.1:27017/blogApp";

Mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error: " + err.message));

module.exports = Mongoose;
