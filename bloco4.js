// 19 - Leia três números diferentes e mostre o maior.
// let numero1 = Number(prompt("Insira o primeiro número: "));
// let numero2 = Number(prompt("Insira o segundo número: "));
// let numero3 = Number(prompt("Insira o terceiro número: "));

// if (numero1==numero2 && numero2==numero3){
//     console.log(`Os números são iguais.`)
// }else if((numero1>numero2 && numero1>numero3)){
//     console.log(`O número ${numero1} é o maior.`)
// }else if((numero2>numero1 && numero2>numero3)){
//     console.log(`O número ${numero2} é o maior.`)
// }else{
//     console.log(`O número ${numero3} é o maior.`)
// }
// ----------------------------------------------------------------------------------
// 20 - Leia uma nota de 0 a 10 e classifique: insuficiente abaixo de 5, regular de 5 a 6,9, bom de 7 a 8,9 e excelente de 9 a 10.
// let nota = Number(prompt("Insira a nota: "));

// if (nota<5){
//     console.log(`Insuficiente`)
// }else if(nota<7){
//     console.log(`Regular`)
// }else if(nota<9){
//     console.log(`Bom`)
// }else{
//     console.log(`Excelente`)
// }
// ----------------------------------------------------------------------------------
// 21 - Leia o ano de nascimento e o ano atual. Informe a categoria: infantil até 10 anos, juvenil de 11 a 17 e adulto a partir de 18.
// let nascimento = Number(prompt("Insira o primeiro número: "));
// let ano = Number(prompt("Insira o segundo número: "));
// let idade = ano-nascimento

// if (idade<=10){
//     console.log(`Infantil`)
// }else if(idade<=17){
//     console.log(`Juvenil`)
// }else{
//     console.log(`Adulto`)
// }
// ----------------------------------------------------------------------------------
// 22 - Leia tres lados e verifique se formam um triângulo. Se formarem, classifique como equilátero, isósceles ou escaleno.
// let lado1 = Number(prompt("Insira o primeiro lado: "));
// let lado2 = Number(prompt("Insira o segundo lado: "));
// let lado3 = Number(prompt("Insira o terceiro lado: "));

// if (lado1<lado2+lado3 && lado2<lado1+lado3 && lado3<lado2+lado1){
//     if (lado1==lado2 && lado2==lado3){
//         console.log("Os valores formam um trângulo equilátero.")
//     }else if (lado1==lado2 || lado2==lado3){
//         console.log("Os valores formam um trângulo isóceles.")
//     }else{
//         console.log("Os valores formam um trângulo escaleno.")
//     }
// }else{
//     console.log("Os valores inseridos não formam um triângulo.")
// }
// ----------------------------------------------------------------------------------
// 23 - Leia peso e altura, calcule IMC e classifique: abaixo de 18,5, normal até 24,9, sobrepeso até 29,9 e obesidade a partir de 30.
// let peso = Number(prompt("Insira o primeiro número: "));
// let altura = Number(prompt("Insira o segundo número: "));
// let resultado = peso/(altura*altura)

// if (resultado<=18){
//     console.log("Muito baixo")
// }else if (resultado<25){
//     console.log("Normal")
// }else if (resultado<30){
//     console.log("Sobrepeso")
// }else{
//     console.log("Obesidade")
// }
// ----------------------------------------------------------------------------------
// 24 - Leia um código de 1 a 7 e informe o dia da semana correspondente. Para outro código, informe invalido.
// let codigo = Number(prompt("Insira o código: "));

// switch(codigo){
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda-feira");
//         break;
//     case 3:
//         console.log("Terça-feira");
//         break;
//     case 4:
//         console.log("Quarta-feira");
//         break;
//     case 5:
//         console.log("Quinta-feira");
//         break;
//     case 6:
//         console.log("Sexta-feira");
//         break;
//     case 7:
//         console.log("Sábado");
//         break;
//     default:
//         console.log("Código inválido");
//         break;
// }
// ----------------------------------------------------------------------------------