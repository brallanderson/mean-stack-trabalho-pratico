var express = require('express');
var router = express.Router();

//router.get("/", function(req, resp) {
//	resp.send("<h1>Hello Word!</h1>");
//});

var isAuthenticated = function (req, res, next) {
// se o usuário for autenticado na sessão, chame o próximo () para chamar o próximo manipulador de solicitação
// Passport adiciona este método ao objeto request. Um middleware é permitido adicionar propriedades a
// objetos de solicitação e resposta
	if (req.isAuthenticated())
		return next();
  // se o usuário não estiver autenticado, então redirecione-o para a página de login
	res.redirect('/');
}

module.exports = function(passport){

  /* Requisição GET para página de LOGIN. */
  router.get('/', function(req, res) {
    // Mostra a página de Login com qualquer mensagem flash, caso exista
    //res.render('index', { message: req.flash('message') });
  });

  /* Requisição POST para LOGIN */
  router.post('/login', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash : true
  }));

  /*Requisição GET para página de Registro */
  router.get('/signup', function(req, res){
  //  res.render('register',{message: req.flash('message')});
  });

  /* Requisição POST para Registros */
  router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/home',
    failureRedirect: '/signup',
    failureFlash : true
  }));

  return router;
}
