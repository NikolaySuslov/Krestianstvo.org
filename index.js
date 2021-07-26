var express = require('express'),
    compression = require('compression'),
    serveStatic = require('serve-static'),
    serveIndex = require('serve-index'),
    morgan = require('morgan'),
    path = require('path')

var app = express();
var port = 3001;

app.use(compression());
app.use(serveStatic(__dirname + '/public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(morgan('combined'));

/*=====Site specific paths=====*/

// app.get('/en', function(req, res) {
//   res.redirect('/');
// });

app.get('/vwf-ometa', function(req, res) {
  res.redirect('books/projects/en/vwf-ometa');
});

app.get('/%D0%B4%D0%B0%D0%BB%D0%B5%D0%B5/krestianstvo', function(req, res) {
  res.redirect('/');
});

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/', 'index.html'))
})

//=========end of specific===========

app.listen(port);
console.log('Web server is started on port: '+ port);
