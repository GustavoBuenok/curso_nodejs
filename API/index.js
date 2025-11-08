import express from "express";

//chamamos o objeto com o nome express e passamos o valor dele mesmo
//podendo acessar suas caracteristicas e comportamentos
const app = express();

//fala para o serviço interpretar em JSON
app.use(express.json())

//criar um array de frutas

let frutas = ["uva", "melância", "maracujá", "morango"]


//serviço = API 

//rota que o cliente ira solicitar
app.get("/", (req, res) => {
    //end quando finaliza a requisição
    //send aceita outros parametros
    res.send("Primeiro dia com NODE")

})


app.get("/usuario/:id", (req, res)=>{
    let id = req.params.id;
    res.end(`O cliente esta querendo ver o usuario com o ID ${id}`);
})

//rota que recebe dois parametros
// e exiba em formato de objeto 

app.get("/aluno/:nome/:curso", (req, res)=>{

    const aluno = {
        nome: req.params.nome,
        curso: req.params.curso
    }


    res.send(aluno);
    // let id = req.params.id;
    // let nome = req.params.nome;
    // res.send(`O cliente esta querendo ver o usario com ID ${id} e nome ${nome}`)
}
)

//crie uma rota chamada fruta com o verbo POST

app.post("/fruta", (req, res) => {
    const novaFruta = req.body.nome;

     frutas.push(novaFruta);
     //vai inserir o dado em ordem sequencial

     res.send("Fruta cadastrada com sucesso");
})

app.get("/fruta", (req,res) =>{
    res.send(frutas);
})

app.put("/fruta/:posicao", (req, res) => {
    //acessamos a posição da fruta desejada e atribuimos um novo valor
    //e atribuimos um novo valor 
    const posicao = req.params.posicao;
    const novoNome = req.body.nome;

    frutas[posicao] = novoNome;

    res.send("O nome da fruta foi alterada para " + novoNome)

})

app.delete("/fruta/:posicao", (req, res) => {
    const posicao = req.params.posicao;
    frutas.splice(posicao, 1);
    res.send(`A fruta da posição ${posicao} foi excluida! Acesse a rota que exibe todas as frutas para confirmar!`);


})

//app listen precisa estar como ultima instrução 
app.listen(3000, ()=>{
    console.log("Iniciando minha API com o EXPRESS")
})