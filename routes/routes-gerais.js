var express = require('express');
var router = express.Router();
var access = require('../routes/access-router.js');

//router.get("/", function(req, resp) {
//	resp.send("<h1>Hello Word!</h1>");
//});

//rota da tela principal
router.get('/home', function(req, res) {
	res.render("home");
});

//rota da tela do mapa do site
router.get('/mapas', function(req, res) {
	res.render("mapas");
});
//rota da tela que contem dados sobre o site
router.get('/sobre', function(req, res) {
	res.render("sobre");
});



module.exports = router;
