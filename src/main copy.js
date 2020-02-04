import { log } from "util";

// import Calculadora from './Calculadora';

// let resultado = Calculadora.somar(2, 4);
// console.log(resultado);

/**
 * package.json
 * "dev": "babel ./main.js -o ./bundle.js -w"
 */
// import { soma, sub } from './lib/funcoes';

// console.log("Resultado da soma costuma ser: ", soma(5, 9.3).toFixed(2));
// console.log("Resultado da subtração: ", sub(3, 2).toFixed(2));
// *************************EXEMPLOS***************************
// let numero = 2;//local dentro do script
// function minhaFuncao() {
//     let nome = "Eduardo Costa";//local dentro da função
//     console.log(numero);

// }

// minhaFuncao()
// console.log(nome);//erro - não é visível fora do escopo/estrutura da função


// const hobbies = [];
// /**
//  * apenas adiciona dados dentro do array. 
//  * Ele não deixa de ser o mesmo array identificado na memória do computador.
//  * Segue o mesmo pensamento para objetos ;)
//  */ 
// hobbies.push('Futebol');
// hobbies.push('Livros');

// console.log(hobbies);

// const produtos = [];

// const camisaPolo = [
//     {
//         descricao : 'Camisa Polo',
//         cor: 'Verde',
//         preco: 49.90,
//         tamanho: 'M',
//         quantidade: 10
//     },
//     {
//         descricao : 'Camisa Polo',
//         cor: 'Amarela',
//         preco: 49.90,
//         tamanho: 'M',
//         quantidade: 10
//     },
//     {
//         descricao : 'Camisa Polo',
//         cor: 'Azul',
//         preco: 49.90,
//         tamanho: 'M',
//         quantidade: 10
//     },
// ];

// const calcaJeans = [
//     {
//         descricao : 'Calça Jeans',
//         preco: 69.90,
//         tipo: 'feminina',
//         tamanho: '38',
//         quantidade: 3
//     },
//     {
//         descricao : 'Calça Jeans',
//         preco: 69.90,
//         tipo: 'masculina',
//         tamanho: '50',
//         quantidade: 3
//     }
// ]

// produtos.push(camisaPolo);
// produtos.push(calcaJeans);

// console.log(produtos);

// let hobbies = ['filmes', 'livros', 'futebol', 'músicas', 'artes'];
// const hobbiesList = hobbies.map(function(hobb){
//     return `<li>${hobb}</li>`
// });

// console.log(hobbiesList);


// let produtos = [{
//             descricao : 'Camisa Polo',
//             cor: 'Verde',
//             preco: 49.90,
//             perfil: 'M',
//             quantidade: 10
//         },
//         {
//             descricao : 'Camisa Polo',
//             cor: 'Amarela',
//             preco: 49.90,
//             perfil: 'F',
//             quantidade: 10
//         },
//         {
//             descricao : 'Camisa Polo',
//             cor: 'Azul',
//             preco: 49.90,
//             perfil: 'M',
//             quantidade: 10
//         }]

//         //retorna apenas polos feminina
//         let polosFemininas = produtos.filter(function(produto){
//             return produto.perfil === 'F'
//         })

//         console.log(polosFemininas);


// let produtos = [{
//     descricao : 'Camisa Polo',
//     cor: 'Verde',
//     preco: 10,
//     perfil: 'M',
//     quantidade: 10
// },
// {
//     descricao : 'Camisa Polo',
//     cor: 'Amarela',
//     preco: 20,
//     perfil: 'F',
//     quantidade: 10
// },
// {
//     descricao : 'Camisa Polo',
//     cor: 'Azul',
//     preco: 12,
//     perfil: 'M',
//     quantidade: 10
// }]

// //retorna apenas polos feminina
// let totalProdutos = produtos.reduce(function (total, produto) {
//     // console.log(`${total} : ${produto.preco}`);

//     return total + produto.preco
// }, 0);

// console.log(totalProdutos);


// let nomes = ['Eduardo', 'Wilson', 'Jonas', 'Margareth', 'James'];
// //envolve os nomes por um parágrafo
// nomes = nomes.map(function(nome){
//     return `<p>${nome}</p>`;
// });

// // Pode ser escrito da seguinte forma:

// let nomes = ['Eduardo', 'Wilson', 'Jonas', 'Margareth', 'James'];
// //envolve os nomes por um parágrafo
// nomes = nomes.map((nome) => {
//     return `<p>${nome}</p>`;
// });

// // ou

// let nomes = ['Eduardo', 'Wilson', 'Jonas', 'Margareth', 'James'];
// //envolve os nomes por um parágrafo
// nomes = nomes.map((nome) => { `<p>${nome}</p>`;
// });

// // ou

// let nomes = ['Eduardo', 'Wilson', 'Jonas', 'Margareth', 'James'];
// //envolve os nomes por um parágrafo
// nomes = nomes.map((nome) => `<p>${nome}</p>`);

// // ou 
// let nomes = ['Eduardo', 'Wilson', 'Jonas', 'Margareth', 'James'];
// //envolve os nomes por um parágrafo
// nomes = nomes.map( nome => `<p>${nome}</p>`);

// // ou 
// let nomes = ['Eduardo', 'Wilson', 'Jonas', 'Margareth', 'James'];
// //envolve os nomes por um parágrafo
// nomes = nomes.map( nome => (`<p>${nome}</p>`) );


// class Produto {
//     constructor() {
//         this.descricao  = '';
//         this.preco      = 0;
//         this.fornecedor = null
//     }

//     adicionaDescricao(descricao) {
//         this.descricao = descricao;
//     }

//     adicionaPreco(preco = 0) {
//         if (preco > 0)
//             this.preco = preco;
//     }

//     adicionaFornecedor(fornecedor = null) {
//         this.fornecedor = fornecedor;
//     }

//     formataNome() {
//         return (
//             `Descrição: ${this.descricao} 
//             Preço: ${this.preco}
//             Marca: ${this.fornecedor}`
//         );
//     }

// }

// const camisaPoloWear = new Produto();
//       camisaPoloWear.adicionaDescricao('Camiseta Polo');
//       camisaPoloWear.adicionaPreco(52.98);
//       camisaPoloWear.adicionaFornecedor('Wear');

// const camisaPoloLacoste = new Produto();
//       camisaPoloLacoste.adicionaDescricao('Camiseta Polo');
//       camisaPoloLacoste.adicionaPreco(190);
//       camisaPoloLacoste.adicionaFornecedor('Lacoste');

// const camisaPoloTommy = new Produto();
//       camisaPoloTommy.adicionaDescricao('Camiseta Polo');
//       camisaPoloTommy.adicionaPreco(105);
//       camisaPoloTommy.adicionaFornecedor('Tommy');

// console.log( camisaPoloWear );
// console.log();
// console.log( camisaPoloWear.formataNome() );


// let {descricao} = camisaPoloLacoste;

// console.log(`Descrição desestruturada ${descricao}`);






// class Produto {
//         constructor() {
//             this.descricao  = '';
//             this.preco      = 0;
//             this.fornecedor = null
//         }

//         adicionaDescricao(descricao) {
//             this.descricao = descricao;
//         }

//         adicionaPreco(preco = 0) {
//             if (preco > 0)
//                 this.preco = preco;
//         }

//         adicionaFornecedor(fornecedor = null) {
//             this.fornecedor = fornecedor;
//         }

//         formataNome() {
//             return (
//                 `Descrição: ${this.descricao} 
//                 Preço: ${this.preco}
//                 Marca: ${this.fornecedor}`
//             );
//         }

//     }

//     const camisaPoloWear = new Produto();
//           camisaPoloWear.adicionaDescricao('Camiseta Polo');
//           camisaPoloWear.adicionaPreco(52.98);
//           camisaPoloWear.adicionaFornecedor('Wear');


// const camisaPolo = {
//     descricao: 'Polo',
//     preco: 49.99,
//     desconto: 5,
//     fornecedor: 'Lacoste'
// }

// const { descricao, ...restoProps } = camisaPolo
// console.log(descricao);
// console.log(restoProps);

// const pares = [2, 4, 6, 8, 10];
// const [x,y, ...numeros] = pares

// console.log(x);
// console.log(y);
// console.log(numeros);


// function totalizador(...params) {
//     return params.reduce((total, proximo) => total + proximo);
// }

// console.log( totalizador(1, 3, 4) );

// const pares = [2,4,6,8,10];
// const impares = [1,3,5,7,9];

// const parImpar = [...pares, ...impares];

// console.log(parImpar);


// const funcionario = {
//     nome: 'Joana Dark',
//     idade: 200,
//     profissao: 'Bruxa das Antigas'
// }

// const funcionarioModerno = {...funcionario, profissao: 'Encandadora'}

// console.log(funcionarioModerno);

/*
    simulando uma chamada a um servidor que pode demorar
    desta forma o server retorna uma promessa de retorno que pode
    ser resolvida ou rejeitada.

    O uso de promises resolve o problema de "assincronia" do JavaScript 
    pois pra rodar o próximo comando que depende do resultado do servidor
    ele aguarda a promessa ser retornada.
    Você pode continuar fazendo outras coisas na página e então
*/
const somaDemorada = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
};

const soma = (a, b) => a + b;

async function somaPromise(a, b) {
    const total = await somaDemorada(a, b);
    console.log(`${total} - aguardei a promise e só então depois printei`);
    return total;
}

//TESTES

//retorna uma Promise com o status Pendente
let teste = somaPromise(10, 2);
console.log(teste);

//aqui soma comum
console.log(`${soma(1, 2)} - comando depois da promise`);

//aqui temos outra forma de pegar o retorno de uma Promise
somaPromise(1, 100).then((resultado) => {
    console.log(resultado);

}).catch(erro => {
    console.log('Deu erro');
    console.log(erro);
});
