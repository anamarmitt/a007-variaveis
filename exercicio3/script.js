let a = 24;
let b = 20;
console.log(a, b);

let auxiliar = a;
a = b;
b = auxiliar;

console.log(a, b, auxiliar);

console.log(`O valor de a é ${a} e de b é ${b}`);
console.log(`O novo valor de a é ${b} e de b é ${a}`);
console.log(a, b);
