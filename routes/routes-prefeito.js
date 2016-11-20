var express = require('express');
var router = express.Router();
var Candidatos = require('../model/model-candidatos.js');
var access = require('../routes/access-router.js');

//router.get("/", function(req, resp) {
//	resp.send("<h1>Hello Word!</h1>");
//});

router.get('/find', function(req, res){
        Candidatos.find({ DESCRICAO_UE: requisicaoHTML.query.cidade.toUpperCase(), DESCRICAO_CARGO: "PREFEITO", NUM_TURNO: 1},
            function(err, data){
							if (err || data == null) {
								res.sendStatus(404);
							}
							else {
								res.json(data);
							}
            });
    });

module.exports = router;
