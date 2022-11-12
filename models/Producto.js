const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const productoSchema=new Schema ({
    codigo:{
        type: Number,
        required: true,
        unique: true
    },
    marca:{
        type: String,
        required: true,
        
    },
    descripcion: {
        type:String,
        required: true
    },
    precio:{
        type:Number,
        required: true
   },
   estaEnOferta:{
    type: Boolean,
    required: false,
   }
})

const Producto=mongoose.model('Producto', productoSchema);

module.exports={Producto};