var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.set('views', __dirname+'/views');
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('static'));
app.set('view engine', 'ejs');

require('./routes.js')(app);

var port = 8000;
app.listen(port, function(){
    console.log('listening on port '+port);
});
