/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function factorial(n: number): number {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1) 
}

console.log(factorial(5))

// factorial de 5 
// 5 * 24 => 120
// 4 * 6 => 24
// 3 * 2 => 6
// 2 * 1 => 2
// 1 * 1 => 1
