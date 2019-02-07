const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// interpreta o server
const server = require('http').Server(app);
// necessario para que o servidor entenda as requisiçoes socket io
const io = require('socket.io')(server);

// conectando com o mlab
mongoose.connect("mongodb://admin:admin123@ds223685.mlab.com:23685/goweek_backend_celso", 
    {
        // para utilizar uma nova forma de conexao
        useNewUrlParser: true
    }
);

//middleware para deixar o socket.io acessivel em todo o projeto o tempo todo
// sendo um interceptador, adicionando info no 'req'
// next - continua a requisição normalmente, nao interrompendo o processo do backend
app.use((req, res, next) => {
    req.io = io;
    return next();
})

app.use(cors());
// forçando as requisiçoes serem todas em json
app.use(express.json());
app.use(require('./routes'));

// seta a porta em que o node vai rodar no servidor
server.listen(3000, () => {
    console.log('Server funcionando!');   
});