function getDis(rorl, middle) {
    return Math.ceil(Math.sqrt(Math.pow(rorl[0]-middle[0],2) + Math.pow(rorl[1]-middle[1],2)));
}

function solution(numbers, hand) {
    let answer = '', left = [1,4,7], right = [3,6,9], center = [2,5,8,0], LP = [3,0], RP = [3,2];
    
    numbers.map(n => {
        if (left.includes(n)) { 
            answer += 'L';
            LP = [left.indexOf(n), 0];
            
        } else if (right.includes(n)) { 
            answer += 'R';
            RP = [right.indexOf(n), 2];
        } else {
            const middle = [center.indexOf(n), 1]; 
            
            const LD = getDis(LP, middle); 
            const RD = getDis(RP, middle); 
            
            if (LD > RD) { 
                answer += 'R'; 
                RP = middle; 
            } else if (RD > LD) { 
                answer += 'L';
                LP = middle;
            } else { 
                if (hand === 'right') {
                    answer += 'R';
                    RP = middle;
                } else { 
                    answer += 'L';
                    LP = middle;
                }
            }
        }
    });
    
    return answer;
}
