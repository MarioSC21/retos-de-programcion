/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const numPrimo = (num:number) => {
  let i = 2
  while (i <= num) {
    if (num === i) return true
    else if(num % i === 0) return false
    i++
  }
}

for (let i = 0; i <= 100; i++) {
  if(numPrimo(i)) console.log(i) 
}
// console.log(numPrimo(100))