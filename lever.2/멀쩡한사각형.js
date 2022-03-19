function solution(w, h) {
    let factor=0;
    for(let i=1; i<=w; i++) {
        if ( w%i ===0&& h%i===0)  factor=i;
    }
   return w * h - (w + h - factor);
}
