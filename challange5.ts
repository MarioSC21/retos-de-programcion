/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */
interface poligon {
  area: () => number
  printArea: () => void
}
const triángulo = (base: number, height: number): poligon => {
  const area = (): number => (base * height) / 2
  const printArea = () => console.log(`El área del triángulo es: ${area()}`)
  return { area, printArea }
}
const cuadrado = (lado: number): poligon => {
  const area = (): number => lado ** 2
  const printArea = () => console.log(`El área del cuadrado es: ${area()}`)
  return { area, printArea }
}
const rectangulo = (base: number, altura: number): poligon => {
  const area = (): number => base * altura
  const printArea = () => console.log(`El área del rectangulo es: ${area()}`)
  return { area, printArea }
}

const area = (poligono: poligon): number => {
  poligono.printArea()
  return poligono.area()
}

area(triángulo(10, 12))
area(cuadrado(5))
area(rectangulo(12, 15))
