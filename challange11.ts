/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

const printDiferencias = (str1: string, str2: string) => {
  const out1 = str1.split("").filter((char) => !str2.includes(char)).join("")
  const out2 = str2.split("").filter((char) => !str1.includes(char)).join("")
  console.log(out1,out2)
}
printDiferencias('Me gusta Java','Me gusta Kotlin')