//Serializando e Deserializando Instâncias de Usuário
var login = require('./login');
var signup = require('./signup');
var User = require('../model/model-usuario.js');

module.exports = function(passport){

	// O Passport precisa ser capaz de serializar e deserializar usuários para dar suporte a sessões de login persistentes
    passport.serializeUser(function(user, done) {
        console.log('serializing user: ');console.log(user);
        done(null, user._id);
    });
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            console.log('deserializing user:',user);
            done(err, user);
        });
    });
    // Configurando Estratégias de Passaporte para Login e Registro / Inscrição
    login(passport);
    signup(passport);

}
