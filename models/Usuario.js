const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const usuarioSchema=new Schema ({
    nombre:{
        type: String,
        required: true,
        
    },
    apellido:{
        type: String,
        required: true,
        
    },
    correo: {
        type: String,
        required: true,
        unique:true,
    },
   contraseña:{
        type: String,
        required: true,
        unique:true
   }
});

const Usuario=mongoose.model('Usuario', usuarioSchema);

module.exports={Usuario};