const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const asesoriasSchema = new Schema({
  especieAnimal: {
    type: String,
    required: true,
  },
  pesoDeAnimal: {
    type: Number,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  patologiasPrevias: {
    type: String,
  },
  
});

const Asesorias = mongoose.model("Asesorias", asesoriasSchema);

module.exports = { Asesorias };
