// palindrome
// string

// var string = prompt("Enter the name")
// var small = string.toLowerCase()
// var split = small.split("")
// var reverse = split.reverse().join("")

// if (reverse === string) {
//   console.log("palindrome")
// }else{
//   console.log("not a palindrome")
// }

// number

// var number = prompt("Enter a number")
// var convertNum = number.toString()
// var splits = convertNum.split("")
// var reverse = splits.reverse().join("")

// if (reverse === number) {
//   console.log("palindrome")
// }else{
//   console.log("not a palindrome")
// }


// prime or not

// var number = prompt("Enter a number")
// let isPrime = true

// var convertNum = parseInt(number)
// if (convertNum > 2){
//   for (let i=2; i<convertNum; i++) {
//     if(convertNum % i === 0) {
//       isPrime = false
//       break
//     }
//   }

//   if (isPrime) {
//     console.log(`${convertNum} is a prime number`);
// } else {
//     console.log(`${convertNum} is a not a prime number`);
// }

// }else{
//   console.log("Enter number grater than 2")
// }


// lcm

// const num1 = prompt('Enter a first positive integer: ');
// const num2 = prompt('Enter a second positive integer: ');

// let max = Math.max(num1, num2)
// let min = Math.min(num1, num2)

// let lcm = max

// while(true){
//   if(lcm%min == 0) {
//     console.log(`The LCM of ${num1} and ${num2} is ${min}`)
//     break
//   }
//   min++
// }


// gcd

// program to find the HCF or GCD of two integers

// let hcf;

// const number1 = prompt('Enter a first positive integer: ');
// const number2 = prompt('Enter a second positive integer: ');

// for (let i = 1; i <= number1 && i <= number2; i++) {
//     if( number1 % i == 0 && number2 % i == 0) {
//         hcf = i;
//     }
// }

// console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);


// factorial

// function factorial(n){
//   if(n === 0){
//     return 1;
//   }
//   return n*factorial(n-1)
// }

// console.log(factorial(5))


// leap year

// const year = parseInt(prompt("Enter the year"))

// if (year % 4 == 0){
//   console.log("Give year is leap year")
// }else{
//   console.log("Given year is not a leap year")
// }


// second largest number in array

// const array = [1, 2, 3, 4, 5]
// const secondLargest = array.sort((a, b) => b-a)[1]
// console.log(secondLargest)



// array methods

// map

// const array = [1, 2, 3, 4, 5]
// const doubleArray = array.map((i) => i*2)
// console.log(doubleArray)

// filter

// const array = [1, 2, 3, 4, 5]
// const graterThanThree = array.filter((i) => i>3)
// console.log(graterThanThree)


const array = [1, 2, 3, 4, 5]

// const result = array.pop()
// console.log(array)

// const result = array.push(6)
// console.log(array)

// const result = array.shift()
// console.log(array)

// const result = array.unshift(0)
// console.log(array)

const result = array.slice(0, 2)
console.log(result)

// const result = array.splice(1, 10)
// console.log(result)