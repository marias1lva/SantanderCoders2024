const prompt = require('readline-sync');

const idade = Number(prompt.question("Qual eh a sua idade? "));

// Estrutura Condicional = if/else

if(idade >= 18){
    console.log("Voce eh MAIOR de idade.");
}else{
    console.log("Voce eh MENOR de idade");
}

// exemplo com média
const mediaDoAluno = 6;
if(mediaDoAluno >= 7){
    console.log("APROVADO!");
}else if(mediaDoAluno < 7 && mediaDoAluno >= 5){
    console.log(mediaDoAluno, " = Recuperacao.");
}else{
    console.log("REPROVADO.");
}


