/*
 * Crea una función que sume 2 números y retorne su resultado pasados
 * unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que
 *   debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma
 *   asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */
type sumar = (a: number, b: number, segundos: number) => Promise<number>
const sumar: sumar = (a, b, segundos) => {
  return new Promise((resolve, _) => {
    //? Con SetInterval
    let counter = segundos
    console.log("Iniciando la suma")
    const i = setInterval(() => {
      console.log(counter)
      counter--
      if (counter === 0) {
        resolve(a + b)
        clearInterval(i)
      }
    }, 1000)

    //? Con setTimeout
    // setTimeout(() => {
    //   resolve(a + b)
    // }, 1000 * segundos)
  })
}
const main = async () => {
  console.log("Su suma es :",await sumar(50, 23, 10))
}

main()
