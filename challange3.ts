/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

//! Con recursividad
// const Fibonacci = (num:number):number => {
//   if (num <= 1) return 1
//   return Fibonacci(num - 1) + Fibonacci(num - 2)
// }

// for(let i = 0 ; i<= 50; i++){
//   console.log(Fibonacci(i))
//}

//! Sin recursividad

const Fibonacci = (num:number) => {
  const fibList = [0, 1]
  for (let i = 2; i < num ; i++) {
    fibList.push(fibList[i-1] + fibList[i-2])
  }
  return fibList
}
console.log(Fibonacci(8))