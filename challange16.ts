/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

const capitalize = (str: string):string => {
  const strArray = str.split(" ")
  let result:string[] = []
  strArray.forEach((word) => {
    const firtsLetraUpper = word.split("")[0].toUpperCase()
    const RetPalabra = word.split("").slice(1).join("")
    result.push(firtsLetraUpper + RetPalabra)  
  })
  return result.join(" ")
}

const r = capitalize("mi nombre es mario y estoy aprendiendo typescript")
console.log(r)
