const mongoose = require("mongoose");

require("dotenv").config("");

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://nadia:nadia@cluster0.mzzwibf.mongodb.net/test");
    console.log("Base de Datos Conectada");
  } catch (error) {
    console.log("error al conectarse con la db");
    console.log(error.message);
  }
};
module.exports = { connect };
