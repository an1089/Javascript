// function sayname(){
//     console.log("Hello, My name is Prashant");
// }
// sayname();
// function add(num1,num2){
// return num1+num2}
// function name(user){
//     // if(user===undefined){
//     //     user="Unknown"
//     // }
//     if(!user){
//         user="Unknown"
//     }
//     return`${user} just here to say hello!` 
// }
// console.log(add(5,5));
// console.log(name("Prashant"));

function cart(val1,val2,val3,...num1){
    return num1
}
console.log(cart(1,2,3,4,5,6,7,8,9,10));

const user= {
    "username" : "Prashant",
    "email": "xyz@gmail.com"
}
function getuser(obj){
 return `${obj.username} is having email ${obj.email}`
}
console.log(getuser(user));
const array=[1,2,3,4,5,6,7,8,9,10]
function getarray(arr){
    return arr[0]
}
console.log(getarray(array));