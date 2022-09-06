/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

const convertBinario = (number: number):string => {
  if (number < 0) return '0'
  let divisor = number
  let numbinario:number[] = []
  while (divisor >= 2) {
    const residuo = Math.floor(divisor) % 2
    numbinario.push(residuo)
    divisor = Math.floor(divisor) / 2
  }
  numbinario.push(Math.floor(divisor))
  return numbinario.reverse().join('')
}
console.log(convertBinario(-1))
