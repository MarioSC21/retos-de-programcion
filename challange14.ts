/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información 
 * al respecto.
 */

const numeroArmstrong = (num: number): boolean => {
  const converString = num.toString().split("")
  const arrayNum:number = converString.map(c => (+c)**converString.length).reduce((prev,next) => prev + next)
  if(arrayNum === num as unknown as number) return true
  return false
}
console.log(numeroArmstrong(371))