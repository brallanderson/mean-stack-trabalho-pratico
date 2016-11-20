var express = require('express');
var app = express();
var path = require('path');
//var favicon = require('static-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var db = require('./data-base/db-connection.js');
var flash = require('connect-flash');

app.use(bodyParser.urlencoded({ extended: true })); // Servidor será capaz de pocessar requisições codificadas em formato UTF-8, e processar objetos passados na requisição(função estabelecida pelo parametro extended)
app.use(bodyParser.json()); // Servidor será capaz de processar requisições e dados no formato JSON


// configurando o Passport
var passport = require('passport');
var expressSession = require('express-session');
//app.use(expressSession({secret: 'minhaChaveEncriptada'}));
app.use(expressSession({
    secret: 'mySecretKey',
    //name: 'cookie_name',
    //store: 'sessionStore', // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.disable('x-powered-by');

// Visualizar a configuração da engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(favicon());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Usando o middleware flash fornecido pelo connect-flash para armazenar mensagens na sessão
 // e exibindo em modelos
app.use(flash());

// iniciar passport
var initPassport = require('./passport_config/init.js');
initPassport(passport);

var api = {};

//comentar ou remover depois que aplicaçao estiver funcionando
/* Hello API */
app.get("/", function(req, resp) {
	resp.send("<h1>Hello Word!</h1>");
});

//descomentar depois que criar a tela de login
//api.pass = require('./routes/routes-login.js')(passport);
//app.use('/', api.pass);

api.eleitor = require('./routes/routes-eleitorado.js');
app.use('/eleitorado', api.eleitor);

api.login = require('./routes/routes-login.js');
app.use('/login', api.login);

api.prefeito = require('./routes/routes-prefeito.js');
app.use('/prefeitos', api.prefeito);

api.vereador = require('./routes/routes-vereador.js');
app.use('/vereadores', api.vereador);

// catch 404 e encaminhar para manipulador de erro
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// manipulador de erro de desenvolvimento
// imprimirá stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

module.exports = app;
