/*
 * Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra
 * que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que 
 *   lo resuelvan directamente.
 */
//! 1- con for
function mcd(a: number, b: number): number {
  let mcd = 1
  for (let i = 1; i <= a && i <= b; i++) {
      if (a % i == 0 && b % i == 0) {
          mcd = i
      }
  }
  return mcd
}

function mcm(a: number, b: number): number {
  return (a * b) / mcd(a, b)
}
  
console.log(mcd(12 , 18))
console.log(mcm(12 , 18))

//! 2- con while
// function numMayor(num1: number, num2: number) {
//   if(num1 > num2) return num1
//   return num2
// }

// const calcularMCD = (num1: number, num2: number) => {
//   const mumMasAlto = numMayor(num1, num2)
//   let numUno = num1
//   let numDos = num2
//   let numMCD = 1
//   let i = 2
//   while(i < mumMasAlto){
//     if(numUno % i === 0 && numDos % i === 0){
//       numUno /= i
//       numDos /= i
//       numMCD *= i
//     }else{
//       i++
//     }
//   }
//   if(num1 === numUno && num2 === numDos) return 1
//   return numMCD
// }

// const calcularMCM = (num1: number, num2: number) => {
//   const mumMasAlto = numMayor(num1, num2)
//   let numUno = num1
//   let numDos = num2
//   let numMCD = 1
//   let i = 2
//   while(i < mumMasAlto){
//     if(numUno % i === 0 || numDos % i === 0){
//       if(numUno % i === 0) {
//         numUno /= i
//       }
//       if (numDos % i === 0){
//         numDos /= i
//       }
//       numMCD *= i
//     }else{
//       i++
//     }
//   }
//   if(num1 === numUno && num2 === numDos) return 1
//   return numMCD
// }

// console.log(calcularMCD(12 ,18))
// console.log(calcularMCM(124,555))

