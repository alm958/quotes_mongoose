var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotesdb');

var QuoteSchema = new mongoose.Schema({
    author : {
        type: String,
        default: 'anonymous',
        maxlength: [25,'name cannot exceed 25 characters'],
        minlength: [2,'minumum name langth is two characters'],
        required: true,
        trim: true
    },
    quote: {
        type: String,
        default: '"..."',
        trim: true
    },
},
    {timestamps: true}
);

mongoose.Promise = global.Promise;

module.exports = mongoose.model('Quote',QuoteSchema);
