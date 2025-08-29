
//funcao declarativa

//function saudacao(nome) {
//    return `Ola, ${nome}!`
//}

//console.log(saudacao("Carlos"))

//funcao anonima

//const soma = function(a, b) {
//    return a + b
//}

//console.log(soma(5,10))


//function soma2 (a, b) {
//    return a + b
//}

//console.log(soma2(5,15))


//const multiplicar = (a, b) => a * b

//console.log(multiplicar(5, 5))


function ExibirIdade(idade) {
    return `Sua idade é ${idade} anos!`
}


const ExibirAltura = function(altura) {
    return altura
}


const ExibirCurso = (curso) => curso


const ExibirTudo = (idade, altura, curso) => {
    console.log(ExibirIdade(idade), ExibirAltura(altura), ExibirCurso(curso));
}

ExibirTudo(31, 1.88, "Sistema de Informação");
