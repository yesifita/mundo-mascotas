const mongoose = require("mongoose");
  require('dotenv').config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Base de Datos Conectada");
  } catch (error) {
    console.log("error al conectarse con la db");
    console.log(error.message);
  }
};
module.exports = { connect };
