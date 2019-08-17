const adjacentElementsProduct = ( array ) => {
    let product = []
    array.forEach( ( value, index ) => {
        if( index !== array.length - 1 )
            product.push( productBetweenTwoElements( value, array[ index + 1] ) );
    });

    return Math.max( ...product);

}

const productBetweenElements = ( a, b ) => a * b;

console.log(adjacentElementsProduct( [3, 6, -2, -5, 7, 3] ) );

function adjacentElementsProduct(inputArray) {
    let maiorProduto = [];
    for( let i = 0; i<inputArray.length; i++ ) {
        if( i !== inputArray.length - 1 ) {
            maiorProduto.push( inputArray[i] * inputArray[ i + 1 ] );
        }
    }

    return Math.max(...maiorProduto);
}
