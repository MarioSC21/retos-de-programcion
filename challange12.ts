/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
 * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

//? con exprexiones regulares
const cadenaArray = (cad:string) => {
  const reg = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g
  const espacios = /\s+/g // \s => referencia a todos los espacios en blanco taulaciones y saltos
  return cad.trim().toLowerCase().replace(reg,"").normalize('NFD').replace(/[\u0300-\u036f]/g,"").replace(espacios,"").split("")
}

//? cons diccionario
const quitarAcentos = (cadena : string) => {
  const acentos : {[key:string]:any} = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
  return cadena.split("").map(c => acentos[c] || c).join("").toString().toLowerCase()
}

const esPalindromo = (text : string) : boolean => {
  //?usando la otra funcion
  const acent = quitarAcentos(text)

  const textInput = cadenaArray(text)
  const textInputReverse = cadenaArray(text).reverse()

  for (let index = 0; index < textInput.length; index++) {
    let i = -textInput.length
    if(textInput[index] !== textInputReverse[index]) return false
  }
  return true
}
console.log(esPalindromo("Eva usaba rímel y le miraba suave."))