//importa um modulo/pacote do NodeJS
const http = require("node:http");


//Define o endereço do meu servidor 
const hostname = "127.0.0.1";

//Define a porta onde o servidor vai rodar
const port = 3000;

//cria um servidor 
const server = http.createServer((req, res)=>{
    //o corpo{} de uma função anonima é onde colocamos os códigos

    //define que a resposta será OK()
    res.statusCode = 200;

    //Define o tipo de conteudo que será enviado
    res.setHeader("Content-Type", "text/plain");

    res.end("Hello World, Olá Mundo!");

});

server.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`)
});
