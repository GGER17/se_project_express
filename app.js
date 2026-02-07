const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
const { PORT = 3001 } = process.env;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = { _id: "6987204a768afc476ff04672" };
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
  res.status(500).send({ message: "An error has occurred on the server" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
