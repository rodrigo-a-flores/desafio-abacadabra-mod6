const Users = require('../usuarios.js');
const path = require('path');

const validarUser = (req, res, next) => {    
        const users = req.params.usuario;
        if (Users.includes(users)) {
            next();
        } else {
            res.redirect('/img/who.jpeg');
        }
};
const validarNumero = (req, res, next) => {
    const numRandom = Math.floor(Math.random() * 4) + 1;
    const numImgConejo = parseInt(req.params.n, 10);
    if (numImgConejo === numRandom) {
        next();        
    } else {
        res.redirect('/img/voldemort.jpg');
    } 
    
}

module.exports = {validarUser, validarNumero}