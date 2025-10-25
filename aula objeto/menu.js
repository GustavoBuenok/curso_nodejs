// instala a biblioteca que permite a entrada de dados
import PromptSync from "prompt-sync";

//aciona a função da biblioteca
let prompt = PromptSync();

// class é um modelo de algo (objeto)
class Pessoa{
    //atributo privado
    #senha;


    //constructor constroi mais de um objeto , para por os valores de cada um dos objetos, colocamos via parametro.
    constructor(nome, idade, dataNasc,senha, palavraChave){
        this.nome = nome,
        this.idade = idade,
        this.dataNasc = new Date(dataNasc).toLocaleString("pt-BR"),
        this.#senha = senha 
        this.palavraChave = palavraChave  

    }

    apresentar(){
        console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} anos`);
        
    }

    // metodo especial que permite eu gerenciar a visualização da senha
    get senha(){
         const palavraChave = prompt("Para ver sua senha ,voce precisa digitar sua palavra chave:")

        if(this.palavraChave == palavraChave){
            console.log("entrou");
            console.log(this.#senha);
            
            return this.#senha;
        } else {
            return "Tente novamente"
        }
    }
} 

let nomePessoa = prompt("Digite o seu nome:");
let idadePessoa = parseInt(prompt("Digite sua idade:")) ;
let dataNascPessoa = prompt("Digite sua data de nascimento no formato ano/mes/dia")
let senhaPessoa = prompt("Digite sua senha")
let palavraChavePessoa = prompt("Digite sua palavra chave, caso um dia queira ver sua senha:")

const novaPessoa = new Pessoa(nomePessoa, idadePessoa, dataNascPessoa, senhaPessoa, palavraChavePessoa);
console.log(novaPessoa);

//aciona a função do objeto já criado
novaPessoa.apresentar();
novaPessoa.senha;

//exibir todo o objeto

