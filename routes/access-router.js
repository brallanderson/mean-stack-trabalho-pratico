var express = require('express');
var router = express.Router();

router.all('*',
    function(req, res, nextfunction) {
        respostaHTML.header("Access-Control-Allow-Origin", "*");
        respostaHTML.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        respostaHTML.header("Access-Control-Allow-Methods" , "GET,POST,PUT,DELETE,OPTIONS");
        nextfunction();
      });

module.exports = router;
