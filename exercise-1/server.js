const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public")); // <-- add this

const calculatorRoutes = require("./routes/calculatorRoutes");
app.use("/api/calculator", calculatorRoutes);

app.get("/", (req, res) => {
  res.send("Calculator API (MVC) is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
