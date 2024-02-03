require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRouter = require("./router/todos");
const userRouter = require("./router/user");

const app = express();

app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to Mongodb");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/", todoRouter);
app.use("/user", userRouter);

app.listen(process.env.PORT, () => console.log(`Alive on ${process.env.PORT}`));
