const shapeArea = ( n ) => {
    let area = 0;
    for ( let i=1; i<= n;  i++ ) {
        if(i % 2 === 1) {
            area += ( n ) + ( n - 1) 
        } else {
            area += ( n )
        }
    }

    return area;
} 

console.log( shapeArea(  ) );