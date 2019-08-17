function kthDivisor( n, k ) {
    let divisors = [];
    
    for( let i = 1; i<=n; i++ ) {
        const divisor = n / ( i );
        divisors.push( Number.isInteger( divisor ) ? divisor : null);
    }

    const filtersElements = divisors.filter( e => e !== null).sort((a, b) => a < b ? - 1 : 1);
    return filtersElements[ k - 1 ] !== undefined ? filtersElements[ k - 1 ] : - 1;
}


console.log(kthDivisor(63, 4));