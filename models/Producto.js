const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productoSchema = new Schema({
  codigo: {
    type: Number,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
  medidas: {
    type: Number,
    required: false,
  },
  estaEnOferta: {
    type: Boolean,
    required: false,
  },
  esUltimaUnidad: {
    type: Boolean,
    require: false,
  },
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = { Producto };
