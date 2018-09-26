function sudoku2(grid) {
    let length = grid.length;

    let cuboResult = cubo(grid);

    if(cuboResult === false) {
        return false;
    } else{
        for(let i=0; i<length; i++) {
            for(let j=0; j<length; j++) {
                if(parseInt(grid[i][j]) > 0) {
                    let [valor, coluna] = [grid[i][j], j];
                    
                    //verificando a linha
                    for(let k=j+1; k<length; k++) {
                        if(valor === grid[i][k]) {
                            return false;
                        }
                    }

                    //verificando a linha para baixo
                    for(let m=i+1; m<length; m++) {
                        if(valor === grid[m][coluna]) {
                            return false;
                        }
                    }
                }
            }
        }  
    }

    return true;
    
}

function analiseCubo(matriz) {
    let elements = matriz.map(Number);
    for(let i=0; i<elements.length; i++) {
        for(let j=i+1; j<elements.length; j++) {
            if(elements[i] === elements[j]) {
                console.log('matriz: ', matriz);
                console.log('elements[i] === elements[j]: ', elements[i], elements[j]);
                return false;
            }
        }
    }

    return true;
}

function cubo(matriz) {

    let cuboPorCubo = [];
    let controleLinha=0;
    let controleColuna=0;
    let auxiliarLinha = 0;
    let auxiliar = 0;
    let auxiliarCol = 1;

    let controleLoop = [0, 3, 6, 9];
    for(let j=1; j<controleLoop.length; j++) {
        for(let i = 0; i<3; i++) {
            for(controleLinha = controleLoop[auxiliarLinha]; controleLinha<controleLoop[j]; controleLinha++) {
                for(controleColuna=controleLoop[auxiliar]; controleColuna<controleLoop[auxiliarCol]; controleColuna++) {
                    cuboPorCubo.push(matriz[controleLinha][controleColuna]);
                }
            }
            auxiliar++;
            auxiliarCol++;

            if(!analiseCubo(cuboPorCubo)) return false;
            cuboPorCubo = [];''
        }

        auxiliarLinha++;
        auxiliar = 0;
        auxiliarCol = 1;
    }
    return true;
}

let result = sudoku2(
[[".",".",".","1","4",".",".","2","."], 
 [".",".","6",".",".",".",".",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".","1",".",".",".",".",".","."], 
 [".","6","7",".",".",".",".",".","9"], 
 [".",".",".",".",".",".","8","1","."], 
 [".","3",".",".",".",".",".",".","6"], 
 [".",".",".",".",".","7",".",".","."], 
 [".",".",".","5",".",".",".","7","."]]
);

console.log(result);
