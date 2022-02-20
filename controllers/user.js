const { response } = require('express')

const usuariosGet = (req, res = response) => {
  const { q, nombre } = req.query
  res.json({
    mesg: 'Get api-Controlador',
    q,
    nombre,
  })
}

const usuariosPost = (req, res) => {
  const { nombre, edad } = req.body

  res.json({
    mesg: 'Post api Controlador',
    nombre,
    edad,
  })
}

const usuariosPut = (req, res) => {
  const { id } = req.params

  res.json({
    mesg: 'Put api  Controlador',
    id,
  })
}

const usuariosDelete = (req, res) => {
  res.json({
    mesg: 'Delete api Controlador',
  })
}

const usuariosPath = (req, res) => {
  res.json({
    mesg: 'Path api Controlador',
  })
}
module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPath,
}
