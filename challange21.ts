/*
 * Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).
 * ¿De cuántas maneras eres capaz de hacerlo?
 * Crea el código para cada una de ellas.
 */

//? 1. Usando un bucle for tradicional
function usingFor(){
  for(let i = 1 ; i <= 100; i++){
    console.log(i)
  }
}
// usingFor()

//? 1. Usando while
function usingWhile(){
  let i = 1
  while(i <= 100){
    console.log(i)
    i++
  }
}
// usingWhile()

//? 1. Usando for in
function usingForIn(){
  for(let i in Array(100).fill(0)){
    console.log((+i) + 1)
  }
}
// usingForIn()

//? 1. Usando foreach
function usingForeach(){
  const numArray = Array(100).fill(0)
  numArray.forEach((_, i) => console.log(i + 1))
}
// usingForeach()

//? 1. Usando map
function usingMap(){
  const numArray = Array(100).fill(0)
  numArray.map((_, i) => {
    console.log(i + 1)
    return i + 1
  })
}
usingMap()