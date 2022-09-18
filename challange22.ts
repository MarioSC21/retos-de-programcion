/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function noRepeatArray(arr: any[]) {
  return [...new Set(arr)].sort()
}

const conjuntos = (arr1: any[], arr2: any[], cond: boolean) => {
  let comunes: any[] = []
  let noComunes: any[] = []
  const noRepeat1 = noRepeatArray(arr1)
  const noRepeat2 = noRepeatArray(arr2)
  if(noRepeat1.length < noRepeat2.length){
    for (let i = 0; i < noRepeat2.length; i++) {
      if (noRepeat1.includes(noRepeat2[i])) {
        comunes.push(noRepeat2[i])
      } else {
        noComunes.push(noRepeat2[i])
      }
      if(!noRepeat2.includes(noRepeat1[i])){
        if(noRepeat1[i]){
          noComunes.push(noRepeat1[i])
        }
      }
    }
  }else {
    for (let i = 0; i < noRepeat1.length; i++) {
      if (noRepeat2.includes(noRepeat1[i])) {
        comunes.push(noRepeat1[i])
      } else {
        noComunes.push(noRepeat1[i])
      }
      if(!noRepeat1.includes(noRepeat2[i])){
        if(noRepeat2[i]){
          noComunes.push(noRepeat2[i])
        }
      }
    }
  }
  return cond ? comunes : noComunes
}
const arr1 = [1, 2, 3, 3, 4,"ma"]
const arr2 = [88, 10, 12, 122, 3, 2, 2, 3, 3, 4, 6, 7, 8,"lu","ma"]

console.log(conjuntos(arr1, arr2, false))
