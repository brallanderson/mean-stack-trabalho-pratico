var express = require('express');
var router = express.Router();
var Candidatos = require('../model/model-candidatos.js');
var access = require('../routes/access-router.js');

//router.get("/", function(req, resp) {
//	resp.send("<h1>Hello Word!</h1>");
//});

router.get('/find', function(req, res){
        var query = '{ "DESCRICAO_UE": "' + req.query.cidade.toUpperCase() + '", "DESCRICAO_CARGO" : "VEREADOR"';
        if(req.query.escolaridade && req.query.escolaridade !== "NULL"){
            find += ', "DESCRICAO_GRAU_ESCOLARIDADE": "' + req.query.escolaridade.toUpperCase() + '"';
        }
        if(req.query.sexo && req.query.sexo !== "NULL"){
            find += ', "DESCRICAO_SEXO": "' + req.query.sexo.toUpperCase() + '"';
        }
        if(req.query.partido && req.query.partido !== "NULL"){
            find += ', "SIGLA_PARTIDO": "' + req.query.partido.toUpperCase() + '"';
        }
        find += ' }';
        var jsonObj = JSON.parse(find);
        Candidatos.find(jsonObj, function(err, data){
					if (err || data == null) {
						res.sendStatus(404);
					} else {
						res.json(data);
					}
        });
});

module.exports = router;
