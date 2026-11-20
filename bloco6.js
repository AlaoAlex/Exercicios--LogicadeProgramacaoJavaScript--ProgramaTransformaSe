// 33 - Leia uma nota e repita a leitura enquanto ela estiver fora do intervalo de 0 a 10.
// while (true){
//     let nota = Number(prompt(`Insira a nota: `));
//     if (nota<0 || nota>10){
//         break;
//     }
// }
// ----------------------------------------------------------------------------------
// 34 - Leia uma senha e permita no máximo três tentativas para acertar a senha 2026.
// let senha = 2026

// for (let i=1; i<4; i++){
//     let tentativa = Number(prompt("Insira sua senha"));
//     if (tentativa != senha){
//         alert(`Senha errada, ${3-i} tentativas restantes`);
//     }else if (tentativa == senha){
//         alert(`Acesso concebido`);
//         break
//     }
// }

// ----------------------------------------------------------------------------------
// 35 - Leia um número inteiro positivo e calcule seu fatorial.
// let numero = Number(prompt("Insira um número para calcular seu fatorial: "));
// let fatorial = 1

// for (;numero>0;numero--){
//     fatorial *= numero;
//     console.log(fatorial)
// }
// ----------------------------------------------------------------------------------
// 36 - Leia um número N e mostre todos os números pares de 0 até N.
// let numero = Number(prompt("Insira um número para calcular seu fatorial: "));

// for (let i=1; i<=numero; i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }

// ----------------------------------------------------------------------------------
// 37 - Leia um número N e some todos os múltiplos de 3 entre 1 e N.
// let numero = Number(prompt("Insira um número: "));

// for (let i=1; i<=numero; i++){
//     if (i%3==0){
//         console.log(i)
//     }
// }

// ----------------------------------------------------------------------------------
// 38 - Leia um número inteiro e diga se ele é primo.
// let numero = Number(prompt("Insira um número: "));
// let divisores = 0

// for (let i=1; i<=numero; i++){
//     numero%i==0 ? divisores ++ : "";
// }
// divisores==1 ? "O número um não é primo" : 
// divisores>2 ? `O número ${numero} não é primo` : 
// `O número ${numero} é primo`;

// ----------------------------------------------------------------------------------