const obtenerProductos=(req,res)=>{
    res.json([
        {
            id:1,
            producto:'Leche',
            marca:'La Serenisima',
            precio:120,
        },
        {
            id:2,
            producto:'pan',
            marca:'Bimbo',
            precio:350,
        }
    ])
};
module.exports={obtenerProductos}