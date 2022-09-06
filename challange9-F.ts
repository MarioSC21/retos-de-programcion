/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */
const transformCodeMorse = (text: string) => {
  const alfabetoMorse = [
    { "0": "-----" },
    { "1": ".----" },
    { "2": "..---" },
    { "3": "...--" },
    { "4": "....-" },
    { "5": "....." },
    { "6": "-...." },
    { "7": "--..." },
    { "8": "---.." },
    { "9": "----." },
    { a: ".-" },
    { b: "-..." },
    { c: "-.-." },
    { d: "-.." },
    { e: "." },
    { f: "..-." },
    { g: "--." },
    { h: "...." },
    { i: ".." },
    { j: ".---" },
    { k: "-.-" },
    { l: ".-.." },
    { m: "--" },
    { n: "-." },
    { o: "---" },
    { p: ".--." },
    { q: "--.-" },
    { r: ".-." },
    { s: "..." },
    { t: "-" },
    { u: "..-" },
    { v: "...-" },
    { w: ".--" },
    { x: "-..-" },
    { y: "-.--" },
    { z: "--.." },
    { ".": ".-.-.-" },
    { ",": "--..--" },
    { "?": "..--.." },
    { "!": "-.-.--" },
    { "-": "-....-" },
    { "/": "-..-." },
    { "@": ".--.-." },
    { "(": "-.--." },
    { ")": "-.--.-" },
  ]

  const esMorse = alfabetoMorse.find((alb) => Object.values(alb)[0] === text.split(" ").shift())
  if (esMorse) {
    //? aca se convierte el codigo morse a texo plano
    let palOrder:string[] = []
    let palabraOrden:string[] = []
    const conv = alfabetoMorse.forEach(alb => { 
      let alfabetoM = text.split(" ").indexOf(Object.values(alb)[0])
      if(alfabetoM !== -1){
        palOrder.push(`${alfabetoM}-${Object.keys(alb)}`)
      }
    })
    palOrder.sort().forEach((pal) => {
      const p = pal.split('-').pop() 
      p && palabraOrden.push(p)
    })
    return palabraOrden.join('')
  }
  
}

console.log(transformCodeMorse("-- .- .-. .. --- / . ... / --. .-. .- -. -.. ."))
