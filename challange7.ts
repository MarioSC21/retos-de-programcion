/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const ContarRepeticionPalabras = (cadena : string):object => {
  const reg = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g
  const cad: string[] = cadena.trim().toLowerCase().replace(reg,'').split(" ").sort()
  const obj = cad.reduce((prev:any,next:any) =>{
    prev[next] ??= 0
    prev[next] ++
    return prev
  }, {})
  return obj
}

const cadenaTexto = "Hola, mi nombre es mario. Mi nombre completo es mario es Moure (MoureDev)."
const obj = ContarRepeticionPalabras(cadenaTexto)
console.log(obj)