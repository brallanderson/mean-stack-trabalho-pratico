var express = require('express');
var router = express.Router();
var Usuario = require('../model/model-usuario.js');

// router.get('/login', function(req, res) {
//   res.render("login");
// });
// router.post('/login', function(req, res) {
//   Usuario.findOne({username: req.body.username, password: req.body.password}, function(err,Usuario){
//     if(err){
//       console.log(err);
//       res.render("login");
//     }else if(!Usuario){
//       console.log(err);
//       res.render("login");
//     }else{
//       res.redirect("home");
//     }
//   })
// });


// router.get('/cadastrausuario', function(req, res) {
//   res.render("cadastrausuario");
// });


// router.post('/cadastrausuario', function(req, res){
//   var novoUsuario = new Usuario();
//   novoUsuario.username = req.body.username;
//   novoUsuario.password = req.body.password;
//   novoUsuario.email = req.body.email;
//   novoUsuario.uf = req.body.uf;
//   novoUsuario.municipio = req.body.municipio;
//   Usuario.insert({Usuario: novoUsuario},function(err,data){
//     if(err){
//       console.log("errocaralho!!!!!");
//     }else{
//       res.render("SALVO");
//     }
//   });
// });

router.get('/esquecersenha', function(req, res) {
  res.render("esquecersenha");
});

module.exports = router;

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
    res.render('login', { message: req.flash('message') });
  });

  /* Requisição POST para LOGIN */
  router.post('/login', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash : true
  }));

  /*Requisição GET para página de Registro */
  router.get('/cadastrausuario', function(req, res){
    res.render('cadastrausuario',{message: req.flash('message')});
  });

  /* Requisição POST para Registros */
  router.post('/cadastrausuario', passport.authenticate('cadastrausuario', {
    successRedirect: '/home',
    failureRedirect: '/cadastrausuario',
    failureFlash : true
  }));
  router.get('/eleitorado', isAuthenticated, function(req, res){
    res.render('eleitorado', { user: req.user });
  });
  router.get('/candidato', isAuthenticated, function(req, res){
    res.render('candidato', { user: req.user });
  });
  router.get('/home', isAuthenticated, function(req, res){
    res.render('home', { user: req.user });
  });
  router.get('/mapas', isAuthenticated, function(req, res){
    res.render('mapas', { user: req.user });
  });
  router.get('/sobre', isAuthenticated, function(req, res){
    res.render('sobre', { user: req.user });
  });
  return router;
}

//realizar logout do sistema.
router.get('/sair', function(req, res) {
  req.logout();
  res.redirect('/');
});
