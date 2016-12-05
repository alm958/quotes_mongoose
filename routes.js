var Quote = require('./db.js');


module.exports = function(app){

    app.get('/', function(req, res){
        res.render('index');
    })

    app.get('/form', function (req, res){
        res.render('form');
    })

    app.get('/quotes', function(req,res){
        Quote.find({}).sort({createdAt: -1}).exec(function(err,allQuotes){
            res.render('quotes',{allQuotes:allQuotes});
        });
    })

    app.post('/quotes/new', function(req,res){
        Quote.create(req.body, function(err, newQuote){
            if(err){
                console.log(err);
                console.log(errors);
                res.render('errors', {errors: Quote.errors})
            } else {
            console.log(newQuote);
            res.redirect('/quotes');
            }
        });
    })

    app.post('/quotes/destroy',function(req, res){
        console.log("in destroy quote");
        console.log(req.body);
        Quote.remove({_id:req.body.id},function(err, result){
            console.log(result);
            res.redirect('/quotes');
        })
    })



}
