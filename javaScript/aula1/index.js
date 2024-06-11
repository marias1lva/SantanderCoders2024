// variáveis compostas = camel case
// JavaScript possui tipagem dinâmica: infere os tipos de dados
var meuNome = "Duda Silva"; // string = aspas duplas
var idade = 18; // number
var altura = 1.65; // number
var estudando = true; // ou false = booleano

console.log(meuNome, typeof meuNome);
console.log(idade, typeof idade);
console.log(altura, typeof altura);
console.log(estudando, typeof estudando);

var semConteudo; // variável não definida = undefined

var curso = "Front-end em React", topico = "JavaScript Básico 1"; // é possível declarar várias variáveis em uma única linha
console.log(curso, topico);

// ! Não é mais utilizado var para declarar variáveis no javascript, usa-se let ou const

let notaDoAluno = 10; // o valor pode sofrer alterações ao longo do código
const mediaDoAluno = 8; // é constante, o valor não pode ser mudado

notaDoAluno = 9;
// mediaDoAluno = 5; NÃO É PERMITIDO, erro na execução

console.log(notaDoAluno)
console.log(mediaDoAluno);
