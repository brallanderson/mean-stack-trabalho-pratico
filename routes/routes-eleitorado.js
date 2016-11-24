var express = require('express');
var router = express.Router();
var Eleitor = require('../model/model-eleitorado.js');
var access = require('../routes/access-router.js');

//router.get("/", function(req, resp) {
//	resp.send("<h1>Hello Word!</h1>");
//});

//rota tela principal do eleitorado
router.get('/', function(req, res) {
	res.render("eleitorado");
});

router.post('/find', function(req, res) {
  Eleitor.find({NR_ZONA: req.query.nrZona, MUNICIPIO: req.query.cidade}, function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
//traz a lista completa do eleitorado
router.get('/listacompletaeleitorado', function(req, res) {
	Eleitor.find(function(err, data) {
		if (err) {
			res.sendStatus(404);
		}
		res.render("listacompletaeleitorado", {lista:data});
	});
});
access.post('/listacompletaeleitorado', function(req, res){
	Eleitor.find(function(err, data) {
		if (err) {
			res.sendStatus(404);
		}
		res.render("listacompletaeleitorado", {lista:data});
	});
})
router.get('/buscaeleitorado', function(req, res) {
	res.render("buscaeleitorado");

});

router.post('/buscaeleitorado', function(req, res) {
	Eleitor.find({MUNICIPIO: req.body.municipio, NR_ZONA:  req.body.zona, FAIXA_ETARIA:  req.body.faixaetaria, GRAU_DE_ESCOLARIDADE:  req.body.escolaridade, SEXO:  req.body.sexo},function(err, data) {
		if (err) {
			console.log(err);
		}

		res.render("resultadobuscaeleitorado",{lista: data});
	});
});
module.exports = router;
