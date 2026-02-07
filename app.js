const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
const { AppError } = require("./utils/errors");

const { PORT = 3001 } = process.env;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = { _id: "65a1234567890abcdef1234" };
  next();
});

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

app.use("/", mainRouter);

app.use((err, req, res, next) => {
  console.error(err);

  const status = err.status || 500;

  const message =
    status === 500 ? "An error has occurred on the server" : err.message;

  res.status(status).send({ message });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
