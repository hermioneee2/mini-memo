const express = require("express");

const indexRouter = require("./router/index");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3031;

app.use(cors());

// app.set("port", port);
app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
