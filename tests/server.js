var express = require('express');
var app = express();

app.use(require('body-parser').urlencoded({extended: false}));
app.use(require('connect-multiparty')());

app.use(express.static(__dirname + '/static'));
app.use('/mocha', express.static(__dirname + '/../node_modules/mocha'));
app.use('/chai', express.static(__dirname + '/../node_modules/chai'));
app.use('/js', express.static(__dirname + '/../tmp'));

app.get('/api/no_param', function(req, res){
  res.set('Content-Type', 'text/plain');
  res.send('no_param');
});

app.get('/api/param', function(req, res) {
  res.send('q param: ' + req.query.q);
});

app.post('/api/body', function(req, res) {
  res.send('q body: ' + req.body.q);
});

var server = app.listen(process.env.PORT || 8080, function() {
    console.log('Listening on port %d', server.address().port);
});
