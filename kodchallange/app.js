//! Q-1
//? Ask the user to input a number. Check the input of the user, if it is not a valid number
//? then keep getting input from the user until provides a valid number.

// const validNumber = () => {
//     let num = prompt("Enter a valid number")

//     if (Number(num)){
//         console.log("It is a valid number") 
//     } else {
//         return validNumber()              // recursion
//     }
// }

// console.log(validNumber());


//! Q-2
//? Write a JavaScript program to compute the greatest common divisor (GCD) (OBEB) of two positive integers.

// const findGcd = (num1, num2) => {
//     let gcd;

//     if (num1 === 0 || num2 === 0){
//         return 'Please enter a valid number'
//     }

//     for (let i = 1; i <= num1 && i <= num2; i++){
//         if (num1 % i === 0 && num2 % i === 0){
//             gcd = i;
//         }
//     }

//     return gcd
// }

// console.log(findGcd(3,6));

//! Q-3
//? Write a code that displays the factors (tam bolen) of a number entered by the user.

// const factor = (num) => {
//     let arr = []

//     for (let i = 1; i <= num; i++){
//         if (num % i === 0){
//             arr.push(i, -i)
//         }
//     }

//     return arr;
// }

// console.log(factor(12));
// console.log(factor(13));

//! Q-4
//? Write a code to calculate the factorial of a number entered by the user.

// const factorial = (num) => {
//     if (num < 0) return -1;

//     if (num === 0){
//         return 1
//     } else {
//         return num * factorial(num - 1)
//     }
// }

// console.log(factorial(3));

//! Q-5
//? Write a code to find numbers that are divisible by 3 and 5, between 100 and 1000.

// const divisible = () => {
//     let arr = []

//     for (let i =100; i <= 1000; i++){
//         if (!(i % 3) && !(i % 5)){
//             arr.push(i)
//         }
//     }

//     return arr
// }

// console.log(divisible())

//! Q-6
//? Write a code that prints a multiplication table of numbers 1 to 10.

// const multiplication = () => {
//     let arr = []
    
//     for (let i = 1; i <= 10; i++){
//         arr.push(`multiplication table of ${i}`)
//         for (let k = 0; k <= 10; k++){
//             arr.push(`${i} * ${k} = ${i*k}`)
//         }
//     }

//     return arr
// }

// console.log(multiplication())

//! Q-7
//? Write a code to draw Whiteball and Powerball numbers for the Powerball lottery game. 
//? 5 Whiteball numbers are chosen from 01 to 69 and 1 Powerball number is chosen from 1 to 26.

// const powerball = () => {
//     let powerball = Math.floor(Math.random() * 26) + 1
//     let whiteball = []

//     for (let i = 1; i <= 5; i++){
//         let random = Math.floor(Math.random() * 69) + 1
//         whiteball.push(random)
//     }

//     return `${whiteball.join(', ')}, ${powerball}`
// }

// console.log(powerball())