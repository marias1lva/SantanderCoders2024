const readlineSync = require('readline-sync');

const idade = readlineSync.question('Qual eh a sua idade?'); 

// coerção explícita (conversão manual)
const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

//coerção implícita 
console.log(1 + "1");
console.log("10" + 5);
console.log(10 - "5"); 
// converte tudo para string(texto)

// qual será a saída desse código?
let n = 1 + "1"; // = '11' (string)
console.log(n);

// qual será a saída desse código?
console.log(2 + 3 + 4 + "5"); // = 2 + 3 = 5 + 4 = 9 + "5" = '95' string

//qual será a saída desse código?
console.log("5" + 2 + 3 + 4); // = "5" + 2 = '52' + 3 = '523' + 4 = '5234'