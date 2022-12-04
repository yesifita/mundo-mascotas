const crearSesion = async (req, res) => {
  let persona = {
    nombre: "yesica",
    correo: "yesifita@gmail.com",
    contraseña: "yesi123",
  }
  req.session.usuario = persona;
  res.json(req.session.usuario);
};

const consultarSesion = async (req, res) => {
  res.json(req.session);
};

const cerrarSesion = async (req, res) => {
  req.session.destroy();
  res.json({ msg: "Sesion cerrada correctamente" });
};
module.exports = { crearSesion, consultarSesion, cerrarSesion };
