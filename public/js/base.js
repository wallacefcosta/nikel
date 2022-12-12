const nome = "Wallace Costa";
let nome2 = "";
let pessoaDefault = {
    nome: "Wallace Costa",
    idade: "30",
    trabalho: "Musico"
}

let nomes = ["Wallace Costa", "Carolina Bempck", "Natalia Bempck"]

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Wallace Costa",
        idade: "30",
        trabalho: "Musico" 
    },
    {
        nome: "Carolina Bempck",
        idade: "17",
        trabalho: "Estudante"
    }
];

function AlterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(NovoNome) {
    nome2 = NovoNome
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("idade:");
    console.log(pessoa.idade);

    console.log("trabalho:");
    console.log(pessoa.trabalho);
}


function adicionarPessoa (pessoa) {
    pessoas.push (pessoa);
}

function imprimirPessoas () {
    console.log ("--------IMPRIMIR PESSOAS--------");
    pessoas.forEach ((item) => {
        console.log ("nome:");
        console.log (item.nome);

        console.log("idade:");
        console.log(item.idade);

        console.log("trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas ();

adicionarPessoa ({
    nome: "Natalia Bempck",
    idade: "24",
    trabalho: "secretária"
});

imprimirPessoas ();

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//  nome: "Carolina Bempck",
//idade: "17",
// trabalho: "Estudante"
//});

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//AlterarNome();     