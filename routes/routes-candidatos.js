var express = require('express');
var router = express.Router();
var Candidatos = require('../model/model-candidatos.js');
var access = require('../routes/access-router.js');

//router.get("/", function(req, resp) {
//	resp.send("<h1>Hello Word!</h1>");
//});
router.get('/', function(req, res) {
	res.render("candidato");
});
//exibe dado de todos os candidatos do sistema.
router.get('/verificacandidato', function(req, res) {
	Candidatos.find(function(err, data) {
		if (err) {
			res.sendStatus(404);
		}else{
		res.render("verificacandidato", {lista:data});
		//res.json(data);
		}
	});
});
//rota para tela de comparação de candidato
router.get('/comparacandidato', function(req, res) {
	Candidatos.find(function(err, data) {
		if (err) {
			res.sendStatus(404);
		}
		res.render("comparacandidato", {lista:data});
	});
});

//comparação de candidato
router.post('/comparacandidato', function(req, res) {
	var cand1 = new Candidatos();
	var cand2 = new Candidatos();
	Candidatos.findOne({NOME_CANDIDATO: req.body.nome_candidato1, DESCRICAO_CARGO:  req.body.cargo},function(err, data1) {
		if (err) {
			console.log(err);
		}
		cand1 = data1;
		console.log(cand1);
	});
	Candidatos.findOne({NOME_CANDIDATO: req.body.nome_candidato2, DESCRICAO_CARGO:  req.body.cargo},function(err, data2) {
		if (err) {
			console.log(err);
		}
		cand2 = data2;
		console.log(data2);
		res.render("resultadocomparacandidato", {valor1:cand1, valor2: cand2});
	});
});


module.exports = router;
