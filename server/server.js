const express = require("express");

const indexRouter = require("./router/index");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3031;

app.use(cors());

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});

app.use("/", indexRouter);
