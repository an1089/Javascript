const number =400;
console.log(number)

const number2 =new Number(405.8);
console.log(number2)

console.log(number2.toFixed(3))
console.log(number2.toPrecision(5))
console.log(number2.toLocaleString('en-IN'));

console.log(Math.abs(4))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))
console.log(Math.round(4.5))
console.log(Math.random())
console.log(Math.max(1,2,3,4,5))
console.log(Math.min(1,2,3,4,5))
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min))//random number between 10 and 20 min will be 10
console.log(Math.trunc(4.5))//4
console.log(Math.trunc(-4.5))//-4
console.log(Math.sign(4))//1