const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index")
const productRouter = require("./routes/productRouter")


const app = express()
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/",indexRouter)
app.use("/api/product/", productRouter)

module.exports = app