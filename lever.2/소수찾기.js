function solution(numbers) {
    const num = numbers.split('');
    const answer =[];
  
    const prime=(n)=> {
      if(n<2) return false;
      for(let i=2; i<=Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
      return true;
    }
    
    const getarr = (arr, fixed) => {
        if(arr.length >= 1) {
            for (let i=0; i<arr.length; i++) {
               const newN = fixed + arr[i];
               const copy = [...arr];
               copy.splice(i, 1);
               if (!answer.includes(+newN) && prime(+newN)){
                  answer.push(+newN) 
               }
               getarr(copy, newN); 
            }
        }
    }
    getarr(num, '');
    return answer.length;
}
