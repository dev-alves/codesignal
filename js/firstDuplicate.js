console.time('desafio');
function firstDuplicate(a) {
    let indexes = [];
    let auxLen = new Array(a.length);
    let len = a.length;
    let saida = -1
    for(let i = 0; i < a.length; i++) {
        if(typeof(auxLen[a[i]]) === 'undefined') {
            auxLen[a[i]] = 1;
        } else {
            return a[i];
        }
    }
    
    return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.timeEnd('desafio');