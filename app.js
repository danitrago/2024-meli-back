var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

if (process.env.NODE_ENV.trim() === "production") {
  dotenv.config({
    path: path.resolve(__dirname, "env/.env.production")
  });
} else if (process.env.NODE_ENV.trim() === "qa") {
  dotenv.config({
    path: path.resolve(__dirname, "env/.env.qa")
  });
} else {
  dotenv.config({
    path: path.resolve(__dirname, "env/.env.local")
  });
}

var indexRouter = require("./routes/index");
var searchRouter = require("./routes/search");
var productsRouter = require("./routes/products");

var app = express();

// enable CORS
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/items", searchRouter); // search
app.use("/api/items", productsRouter); // product details

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
