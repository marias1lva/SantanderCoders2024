// Operadores Booleanos: retornam sempre true ou false, são baseados em comparações

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2); //false: 10 != 12

console.log(numero1 == "10"); // == Compara apenas valores (true)
console.log(numero1 === "10"); // === Compara, além dos valores, o tipo da variável (false)

console.log(numero1 !== numero2); // true

// Conjunções Lógicas: && || 
const idadePessoa1 = 20;
const idadePessoa2 = 39;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18); // só irá retornar true se ambas as afirmativas forem verdadeiras. Se apenas uma for verdadeira, retorna false.

console.log(idadePessoa1 >= 21 || idadePessoa2 >= 21); // Irá retornar true se uma das afirmativas forem verdadeiras, independente de a outra ser verdadeira ou falsa.
// Nesse caso, a pessoa 2 é maior de 21 anos, logo, como usamos OU (||) na afirmativa, retorna true, pois uma delas é verdadeira, mesmo que a outra não seja.

console.log(!(idadePessoa1 >= 21)); // NOT: retorna o inverso
// Nesse caso, a pessoa 1 é menor de 21 anos, logo a afirmativa DENTRO DO PARÊNTESES é FALSA, mas o NOT (! - INVERSO) é VERDADEIRO, logo retornará TRUE.
