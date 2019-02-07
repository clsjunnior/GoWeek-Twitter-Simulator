const Tweet = require('../models/Tweet');

module.exports = {
    //listagem
    async index(req, res){
        // vide mongoose
        const tweets = await Tweet.find({}).sort('-createdAt');
        return res.json(tweets);
    },
    //salvar
    async store(req, res){
        const tweet = await Tweet.create(req.body);
        // toda vez q acionando o emit propaga um evento chamado tweet, tendo os valores
        req.io.emit('tweet', tweet);

        return res.json(tweet);
    }
}