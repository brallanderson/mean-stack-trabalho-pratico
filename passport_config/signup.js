var LocalStrategy   = require('passport-local').Strategy;
var User = require('../model/model-usuario.js');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

	passport.use('cadastrausuario', new LocalStrategy({
            passReqToCallback : true // nos permite repassar todo o pedido para o callback
        },
        function(req, username, password, done) {

            findOrCreateUser = function(){
                // Busca usuário pelo nome apresentado
                User.findOne({ 'username' :  username }, function(err, user) {
                    // Em caso de erro, retornar
                    if (err){
                        console.log('Error in SignUp: '+ err);
                        return done(err);
                    }
                    // Usuário existe
                    if (user) {
                        console.log('User already exists with username: '+ username);
                        return done(null, false, req.flash('message','User Already Exists'));
                    } else {
                      // Se não houver usuário com aquele e-mail
                      // criaremos o novo usuário
                        var newUser = new User();

                        // Atribuindo as credenciais locais
                        newUser.username = username;
                        newUser.password = createHash(password);
                        newUser.email = req.param('email');
                        newUser.uf = req.param('uf');
                        newUser.municipio = req.param('municipio');

                        // salva o usuário
                        newUser.save(function(err) {
                            if (err){
                                console.log('Error in Saving user: '+err);
                                throw err;
                            }
                            console.log('User Registration succesful');
                            return done(null, newUser);
                        });
                    }
                });
            };
            // Atrasa a execução do método findOrCreateUser e o executa
            // na próxima oportunidade dentro do loop de eventos
            process.nextTick(findOrCreateUser);
        })
    );

    // Gera hash usando bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

}
