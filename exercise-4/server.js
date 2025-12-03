require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const catRoutes = require("./routes/catRoutes");
app.use("/api/cats", catRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Microservice running on port ${PORT}`);
});
