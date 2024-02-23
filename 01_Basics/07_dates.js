let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);
let myDate2 = new Date(2023,3,4,5,5) //yy-mm-dd-hh-mm
console.log(myDate2.toString());
console.log(myDate2.toLocaleString());
console.log(myDate2.toDateString());

let mytimestamp = Date.now();
console.log(mytimestamp);
console.log(myDate.getTime());  
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.toLocaleTimeString());