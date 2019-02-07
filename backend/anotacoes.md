## Anotações gerais

Considerações sobre o projeto!

# Ferramentas e dependencias

## MongoDB

- ``yarn install mongoose`` 

Seria a ORM para o banco mongo db e node js
é uma biblioteca que o utiliza a linguagem como o js para codificar querys do banco, sem precisar utilizar comandos como select * from

## nodemoon

- ``yarn install nodemoon -D``
- -D - significa que é uma dependencia para desenvolvimento, nao sendo necessário em produção
- Ele serve para nao ter q ficar reestartando o servidor toda vez que tiver uma alteração ou modificação no js, ele olha se tem novas alteração e reestarta sozinho
- adicionar no packge.json

``"scripts": {
    "start": "nodemon src/index.js"
  }``

  ``yarn start``

- Utilizar o mlab para hospedar o banco, mais pode ser feito local tb.

``usernam: admin``
``senha: admin123``

## cors

Utilizado para liberar o acesso externo a aplicação com socket.io, podendo ser consultado de uma maneira simples, apenas importando o script do socket e chamando a funcão:

`  var socket = io('http://localhost:3000/');
        socket.on('tweet', function(data) {
            console.log(data);
        });`

# Código e estrutura

## Rotas

- Cria a se um router.js que vai dar as rotas de toda a aplicação

no index.js é so chamar o componente de rota e utilizado no router.js

## async await

** estudar: https://blog.rocketseat.com.br/javascript-assincrono-async-await/ **

