var LocalStrategy   = require('passport-local').Strategy;
var User = require('../model/model-usuario.js');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

	passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) {
              // verifica no mongo se o nome de usuário existe ou não
            User.findOne({ 'username' :  username },
                function(err, user) {
                    // Em caso de erro, retorne usando o método done
                    if (err)
                        return done(err);
                    // Nome de usuário não existe, logar o erro & redirecione de volta
                    if (!user){
                        console.log('User Not Found with username '+username);
                        return done(null, false, req.flash('message', 'User Not found.'));
                    }
                    // Usuário existe mas a senha está errada, logar o erro
                    if (!isValidPassword(user, password)){
                        console.log('Invalid Password');
                        return done(null, false, req.flash('message', 'Invalid Password')); // redirect back to login page
                    }
                    // Tanto usuário e senha estão corretos, retorna usuário através
                    // do método done, e, agora, será considerado um sucesso
                    return done(null, user);
                }
            );

        })
    );
        // criptografá-las antes de salvá-las na base de dados
        var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }

}
