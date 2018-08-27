function rotateImage(a) {
    const length = a.length;
    let aux = new Array(length);

    for(let i = 0; i<a.length; i++) {
        aux[i] = new Array(length);
    }

    for(let j = a.length-1, c = 0 ; j>=0; j--, c++) {
        for(let i = 0; i<a.length; i++) {
            aux[i][c] = a[j][i];
        }
    }
    return aux;
}

let resp = rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
console.log(resp);

/**
 * a = [1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]

    rotateImage(a) = [7, 4, 1],
                     [8, 5, 2],
                     [9, 6, 3]
 */
