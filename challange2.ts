/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
const Anagrama = (pal1:string, pal2:string): boolean => {

  const pals1:string[] = pal1.toLowerCase().trim().split('')
  const pals2:string[] = pal2.toLowerCase().trim().split('')
  if(pals1.length !== pals2.length) return false
  const EsAnagram = pals1.find(palabra => {
    let EsAnagrama = pals2.indexOf(palabra)
    return EsAnagrama === -1
  })
  if(EsAnagram){
    return false
  }
  return true
}
console.log(Anagrama('Frase','Fresa'))