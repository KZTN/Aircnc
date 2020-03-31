const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.SERVER_TOKEN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
