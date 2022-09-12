/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

const InvertirCadena = (cadena : string):string => {
  const cad = cadena.split("")
  let cadInvertida:string[] = []
  for (let index = -cad.length; index < 0; index++) {
    cadInvertida.unshift(cad.at(index) as string)
  }
  return cadInvertida.join("")
}

const cadText = "Hola mundo"
const cadInvertida = InvertirCadena(cadText)
console.log(cadInvertida)
