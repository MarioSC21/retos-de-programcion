/*
 * Crea una función que analice una matriz 3x3 compuesta por "X" y "O"
 * y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta.
 *   O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta.
 * Se podría representar con un vacío "", por ejemplo.
 */
type matriz = [string, string, string][];
type resultado = "X" | "O" | "Empate" | "Nulo";
type analizarMatriz = (matriz: matriz) => resultado;
const analizarMatriz: analizarMatriz = (matriz) => {
    let x = 0;
    let o = 0;
    let empate = 0;
    let nulo = 0;
    let resultado: resultado = "Nulo";
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === "X") {
                x++;
            } else if (matriz[i][j] === "O") {
                o++;
            } else if (matriz[i][j] === "") {
                empate++;
            } else {
                nulo++;
            }
        }
    }
    if (x > o) {
        resultado = "X";
    } else if (x < o) {
        resultado = "O";
    } else if (x === o) {
        resultado = "Empate";
    }
    return resultado;
}
console.log(analizarMatriz([["X", "X", "O"], 
                            ["O", "O", "X"], 
                            ["X", "O", "X"]]));