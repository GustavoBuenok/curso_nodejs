// instala a biblioteca que permite a entrada de dados
import PromptSync from "prompt-sync";

//aciona a função da biblioteca
let prompt = PromptSync();

// class é um modelo de algo (objeto)
class Pessoa {
    //atributo privado
    #senha;


    //constructor constroi mais de um objeto , para por os valores de cada um dos objetos, colocamos via parametro.
    constructor(nome, idade, senha) {
            this.nome = nome,
            this.idade = idade,
            this.#senha = senha

    }

    apresentar() {
        console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} anos`);

    }

    // metodo especial que permite eu gerenciar a visualização da senha
    get senha() {
        const palavraChave = prompt("Para ver sua senha ,voce precisa digitar sua palavra chave:")

        if (this.palavraChave == palavraChave) {
            console.log("entrou");
            console.log(this.#senha);

            return this.#senha;
        } else {
            return "Tente novamente"
        }
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, senha, ra) {
        super(nome, idade, senha);
        this.ra = ra
    }
    //polimorfismo
    //sobrescrita - override
    //sobrecarga - overload
    apresentar(){
        console.log(`Olá, sou o aluno(a) ${this.nome} e meu R.A é ${this.ra}`);
    }
}

//extends = herança
class Professor extends Pessoa {

    //os parametros são os valores das chaves
    constructor(nome, idade, senha, registro, salario) {
        super(nome, idade, senha);
        //são as chaves = propriedades da classe
        this.registro = registro
        this.salario = salario
    }
    apresentar(){
        console.log(`Olá, sou o professor(a) ${this.nome} e meu Registro é ${this.registro} e o salario ${this.salario}`);
    }
}

let novaPessoa;

let nomePessoa = prompt("Digite o seu nome:");
let idadePessoa = parseInt(prompt("Digite sua idade:")) ;
let senhaPessoa = prompt("Digite sua senha")

//pergunte ao usuario SE ele é professor ou aluno 
let professor_aluno = prompt("Para professor digite 1 e para aluno digite 2:");

if (professor_aluno == 1) {

    // let nomeProfessor = prompt("Digite o seu nome:");
    // let idadeProfessor = parseInt(prompt("Digite sua idade:"));
    // let senhaProfessor = prompt("Digite sua senha");
    let registroProfessor = prompt("Digite seu registro:");
    let salarioProfessor = prompt("Digite seu salário:");

    //instanciando classe professor

    novaPessoa = new Professor(nomePessoa, idadePessoa, senhaPessoa, registroProfessor, salarioProfessor);

    // const novoProfessor = new Professor(nomeProfessor, idadeProfessor, senhaProfessor, registroProfessor, salarioProfessor);

} if (professor_aluno == 2) {
    // let nomeAluno = prompt("Digite o seu nome:");
    // let idadeAluno = parseInt(prompt("Digite sua idade:"));
    // let senhaAluno = prompt("Digite sua senha");
    let raAluno = prompt("Digite seu ra:")
    
    novaPessoa = new Aluno(nomePessoa, idadePessoa, senhaPessoa, raAluno)

    // const novoAluno = new Aluno(nomeAluno, idadeAluno, senhaAluno, raAluno );
} else {
    console.log("Digite o valor correto.")
}

console.log(novaPessoa)
console.log(novaPessoa.apresentar());







//SE professor = 1
//Digite suas caracteristicas

//SE aluno = 2
//Digite suas caracteristicas



// const novaPessoa = new Pessoa(nomePessoa, idadePessoa, dataNascPessoa, senhaPessoa, palavraChavePessoa);
//console.log(novaPessoa);

//aciona a função do objeto já criado
// console.log(novoProfessor)
// console.log(novoAluno)

//novaPessoa.apresentar();
//novaPessoa.senha;

