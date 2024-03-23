const express = require('express');
const { validarUser, validarNumero } = require('../middlewares/middlewares');
const users = require('../usuarios');
const routers = express.Router();
const path = require('path');

routers.get('/abracadabra/usuarios', (req, res) => {
    res.json(users);
});
routers.use('/abracadabra/juego/:usuario', validarUser, (req, res) =>{
    res.sendFile(path.join(__dirname, '../index.html'));
});
routers.get('/abracadabra/conejo/:n', validarNumero, (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/img/conejito.jpg'));
});
routers.get('*', (req, res) => {
    res.send('<center><h1>Esta pagina no existe</h1></center>');
});

module.exports = routers;