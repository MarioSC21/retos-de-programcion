/* 
* funcion que tenga como parametro un array
* y que esta identifique el numero mayor y menor
* retornando la suma de estos numeros
*/ 

const numArray:number[] = [16,4,53,5,3,15]

const sumarMenorMayor = (num:number[]):number => {
  const newArrayOrder = num.sort((a,b)=>{
    return a - b
  })
  // const firtsValue = newArrayOrder.shift() || 0
  // const endValue = newArrayOrder.pop() || 0
  // return firtsValue + endValue
  return newArrayOrder.shift()! + newArrayOrder.pop()!
}

console.log(sumarMenorMayor(numArray))