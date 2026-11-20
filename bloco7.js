// 39 - Leia 8 números em um vetor e mostre todos na mesma ordem de leitura.
// let lista = []

// for (let i=1; i<=8; i++){
    // lista.push(prompt(`Insira o ${i}º número: `))
// }
// for (let i=1; i<=8; i++){
//     console.log(lista[i])
// }
// ----------------------------------------------------------------------------------
// 40 - Leia 10 números em um vetor e informe o maior e sua posição.
// let maior = 0
// let posicao = 0
// let lista = []

// for (let i=0; i<=9; i++){
    // lista.push(Number(prompt(`Insira o ${i+1}º número: `)));
//     lista[i]>maior ? maior=lista[i] : "";
// }
// posicao = lista.indexOf(maior)
// console.log(`O maior número no vetor é o ${maior} na ${posicao}º posição `);
// ----------------------------------------------------------------------------------
// 41 - Leia 8 notas em um vetor e informe a média e quantas são maiores ou iguais a média.
// let soma = 0
// let maiores = 0
// let notas = []

// for (let i=0; i<8; i++){
//     notas.push(Number(prompt(`Insira o ${i+1}º número: `)));
//     soma += notas[i];
// }
// let media = soma/8

// notas.forEach((nota) => nota>=media ? maiores++ : "");

// console.log(`Com a média de ${media}, ${maiores} notas são maiores ou iguais a ela`)
// console.log(notas)
// ----------------------------------------------------------------------------------
// 42 - Leia 10 números em um vetor e mostre-os na ordem inversa.
// let lista = []
// for (let i=0; i<10; i++){
//     lista.push(Number(prompt(`Insira o ${i+1}º número: `)));
// }
// for (let i=10; i>=0; i--){
//     console.log(lista[i])
// }
// ----------------------------------------------------------------------------------
// 43 - Leia dois vetores de 5 posições e gere um terceiro vetor com a soma das posições correspondentes.
// let lista1 = []
// let lista2 = []
// let soma = []

// for (let i=0; i<5; i++){
    // lista1.push(Number(prompt(`Insira o ${i+1}º número: `)));
// }
// for (let i=0; i<5; i++){
//     lista2.push(Number(prompt(`Insira o ${i+1}º número: `)));
// }
// for (let i=0; i<5; i++){
//     soma.push(lista1[i]+lista2[i]);
// }
// console.log(soma);
// ----------------------------------------------------------------------------------
// 44 - Leia uma matriz 3 por 3 e mostre a soma dos elementos da diagonal principal.
// matriz = []

// for (let i=0; i<3; i++){
//     const linha = []
//     for (let j=0; j<3; j++){
//         linha.push(Number(prompt(`Insira um número: `)));
//     }
//     matriz.push(linha);
// }
// console.log(matriz);
// console.log(`A diagonal principal é ${matriz[0][0]+matriz[1][1]+matriz[2][2]}`);
// ----------------------------------------------------------------------------------