/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

type dateMiliSeg = (dias:number, horas:number, minutos: number, segundos:number) => number

const DateMiliSeg:dateMiliSeg = (dias, horas, minutos, segundos) => {
    const date = new Date();
    date.setMilliseconds(segundos*1000);
    date.setMinutes(minutos);
    date.setHours(horas);
    date.setDate(dias);
    console.log(date);
    return date.getTime();
}

console.log(DateMiliSeg(8,1,1,1))