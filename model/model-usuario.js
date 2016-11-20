var mongoose = require('mongoose');

var schemaUsuario = new mongoose.Schema({

username: {type: String, required: true },
password: {type: String, required: true},
email: {type: String, required: true },
uf: {type: String, required: true },
municipio: {type: String, required: true}

});

module.exports = mongoose.model('Ususario', schemaUsuario);
