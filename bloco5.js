// 25 - Mostre os números de 1 a 10 usando para.
// for (let i = 1; i<=10; i++){
//     console.log(i);
// }
// ----------------------------------------------------------------------------------
// 26 - Leia um número N e mostre a tabuada de N de 1 a 10.
// let numero = Number(prompt("Insira um número: "));

// for (let i=1; i<=10; i++){
//     console.log(numero*i);
// }
// ----------------------------------------------------------------------------------
// 27 - Leia 10 números e mostre a soma deles.
// let soma = 0;

// for (let i=1; i<=10; i++){
//     let numero = Number(prompt(`Insira o ${i}º número: `));
//     soma += numero;
// }
// console.log(`A soma dos números resulta em ${soma}`)

// ----------------------------------------------------------------------------------
// 28 - Leia 10 números e informe quantos são positivos.
// let positivos = 0;

// for (let i=1; i<=10; i++){
//     let numero = Number(prompt(`Insira o ${i}º número: `));
//     if (numero>0){
//         positivos  += 1;
//     }
// }
// console.log(`${positivos} números são positivos`)
// ----------------------------------------------------------------------------------
// 29 - Leia 5 notas e calcule a média da turma.
// let soma = 0;

// for (let i=1; i<=5; i++){
//     let nota = Number(prompt(`Insira a ${i}º nota: `));
//     soma += nota
// }

// console.log(`A média é ${soma/5}`)

// ----------------------------------------------------------------------------------
// 30 - Leia números até que seja digitado 0. Ao final, informe a soma dos valores digitados.
// let soma = 0;

// while (true){
//     let numero = Number(prompt(`Insira um número, digite 0 para sair`));
//     if (numero==0){
//         break;
//     }
//     soma += numero;
// }
// console.log(soma);
// ----------------------------------------------------------------------------------
// 31 - Leia números até que seja digitado um valor negativo. Informe quantos valores não negativos foram lidos.
// let positivos = 0;

// while (true){
//     let numero = Number(prompt(`Insira um número, digite um valor negativo para sair`));
//     if (numero<0){
//         break;
//     }
//     positivos++;
// }
// console.log(positivos);
// ----------------------------------------------------------------------------------
// 32 - Leia idade e sexo de varias pessoas. Encerre quando a idade digitada for 0. Informe a quantidade de maiores de idade.
// let maiores = 0;

// while (true){
//     let sexo = (prompt(`Insira seu sexo: `));
//     let idade = Number(prompt(`Insira sua idade: `));
//     if (idade==0){
//         break;
//     }else if(idade>=18){
//         maiores++;
//     }
// }
// console.log(`${maiores} pessoas são maiores de idade.`);
// ----------------------------------------------------------------------------------
