const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes/index");
const { PORT = 3001 } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

app.use("/", mainRouter);

app.use((err, req, res, next) => {
  console.error(err);

  const { BAD_REQUEST, NOT_FOUND, DEFAULT } = require("./utils/errors");

  if (err.name === "CastError") {
    return res.status(BAD_REQUEST).send({ message: "Invalid ID format" });
  }

  if (err.name === "ValidationError") {
    return res.status(BAD_REQUEST).send({ message: "Invalid data passed" });
  }

  if (err.name === "DocumentNotFoundError") {
    return res.status(NOT_FOUND).send({ message: "Resource not found" });
  }

  if (err.statusCode) {
    return res.status(err.statusCode).send({ message: err.message });
  }

  return res
    .status(DEFAULT)
    .send({ message: "An error has occurred on the server" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
