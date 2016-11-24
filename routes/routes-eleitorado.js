var express = require('express');
var router = express.Router();
var Eleitor = require('../model/model-eleitorado.js');
var access = require('../routes/access-router.js');

//router.get("/", function(req, resp) {
//	resp.send("<h1>Hello Word!</h1>");
//});

router.get('/find', function(req, res) {
  Eleitor.find({NR_ZONA: req.query.nrZona, MUNICIPIO: req.query.cidade.toUpperCase()}, function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
module.exports = router;
