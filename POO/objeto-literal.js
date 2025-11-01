// Objeto

let pessoa = {
    nome:"Clayton",
    dataNasc: new Date(2003, 7, 17).toLocaleString("pt-BR"),
    altura: 1.84,
    peso: 75,
    senha: "123a",
    idade: 22,

    maiorDeIdade: function(){
        return this.idade >= 18;

    },

    apresentar(){
        return `Olá meu nome é ${this.nome}, minha idade é ${this.idade}`
    }
}


console.log(pessoa.apresentar());
console.log(pessoa.maiorDeIdade());

