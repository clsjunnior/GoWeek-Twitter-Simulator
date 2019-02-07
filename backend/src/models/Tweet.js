const mongoose = require('mongoose');

// criando uma tabela com parametros

const TweetSchema = new mongoose.Schema({
    author: String,
    content: String,
    likes:{
        type: Number,
        default: 0,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

// tipo de retorno a ser retornado
module.exports = mongoose.model("Tweet", TweetSchema);