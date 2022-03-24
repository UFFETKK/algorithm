function solution(arr) {
    for(let i=0;i<arr.length-1;i++) {
        arr[i+1] = multiple(arr[i],arr[i+1]);
    } 
    return arr[arr.length-1];
}

function multiple(n,m) {
    let G=0;
    for (let i=1; i<=m; i++ ){
        if ( m%i ===0&& n%i===0)  G=i;
    }
    return m*n/G;
}
