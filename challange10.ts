/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

const expresionBalanceada = (expresión: string): boolean => {
  const expArray = expresión.trim().split("")
  let count = 0
  expArray.forEach((expr) => {
    if (expr === "[" || expr === "{" || expr === "(") count++
    else if (expr === "]" || expr === "}" || expr === ")") count--
  })
  if (count === 0) return true
  return false
}
console.log(expresionBalanceada("{ a * ( c + d ) ] - 5 }"))
