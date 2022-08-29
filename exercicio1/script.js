//let nome;
//let idade;

//console.log(typeof nome, idade); = undefined pq nao teve um valor atribuido

const nome = String(prompt("Qual seu nome?"));
let idade = Number(prompt("Qual a sua idade?"));

console.log(nome, idade);

console.log(typeof nome, typeof idade);
console.log(`Olá ${nome}, você tem ${idade} anos.`);
