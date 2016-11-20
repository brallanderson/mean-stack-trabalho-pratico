var debug = require('debug')('web-service-trabalho-pratico');
var app = require('./index.js');

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  debug('Server listening on port ' + server.address().port);
});

//var app = require('./index');

//app.set('port', 8080);

//var server = app.listen(app.get('port'), function() {
//  console.log('Server listening on port ' + server.address().port);
//});
