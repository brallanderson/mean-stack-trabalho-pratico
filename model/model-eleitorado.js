var mongoose = require('mongoose');

var schemaEleitorado = new mongoose.Schema({

PERIODO: {type: Number, required: true },
UF: {type: String, required: true },
MUNICIPIO: {type: String, required: true },
COD_MUNICIPIO_TSE: {type: Number, required: true },
NR_ZONA: {type: Number, required: true },
SEXO: {type: String, required: true },
FAIXA_ETARIA: {type: Number, required: true },
GRAU_DE_ESCOLARIDADE: {type: String, required: true },
QTD_ELEITORES_NO_PERFIL: {type: Number, required: true }

});

module.exports = mongoose.model('Eleitor', schemaEleitorado);
