const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");

const indexRouter = require("./routes/index");
const usuariosRouter = require("./routes/usuarios");
const productosRoutes = require("./routes/productos");
const asesoriasRoutes = require("./routes/asesorias");
const axiosRoutes = require("./routes/axios");

const app = express();

const { connect } = require("./db/db");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/usuarios", usuariosRouter);
app.use("/productos", productosRoutes);
app.use("/asesorias", asesoriasRoutes);
app.use(
  session({
    secret: "pass",
    resave: true,
    saveUninitialized: true,
  })
);
app.use("/axios", axiosRoutes);
connect();

module.exports = app;
