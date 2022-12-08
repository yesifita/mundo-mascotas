
const crearSesion = (req, res) => {
 let persona = {
    nombre:"yesica",
    correo: "yesifita@gmail.com",
    pass: "yesi123",
  };

  req.session.usuario= persona;
  res.json(req.session.usuario);
};
const consultarSesion = (req, res) => {
    res.json(req.session.usuario);
};

const cerrarSesion =  (req, res) => {
  req.session.destroy();
  res.json({ msg: "Sesion cerrada correctamente" });
};
module.exports = { crearSesion, consultarSesion, cerrarSesion };
