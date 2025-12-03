const Calculator = require("../models/calculatorModel");

function parseNumbers(req) {
  const a = Number(req.query.a ?? req.body.a);
  const b = Number(req.query.b ?? req.body.b);

  if (isNaN(a) || isNaN(b)) {
    throw new Error("Both a and b must be valid numbers");
  }

  return { a, b };
}

const add = (req, res) => {
  try {
    const { a, b } = parseNumbers(req);
    const result = Calculator.add(a, b);
    res.json({ operation: "add", a, b, result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const subtract = (req, res) => {
  try {
    const { a, b } = parseNumbers(req);
    const result = Calculator.subtract(a, b);
    res.json({ operation: "subtract", a, b, result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const multiply = (req, res) => {
  try {
    const { a, b } = parseNumbers(req);
    const result = Calculator.multiply(a, b);
    res.json({ operation: "multiply", a, b, result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const divide = (req, res) => {
  try {
    const { a, b } = parseNumbers(req);
    const result = Calculator.divide(a, b);
    res.json({ operation: "divide", a, b, result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
