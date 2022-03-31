function solution(priorities, location) {
    let ranking = 0;
    while (priorities.length) {
        if (priorities[0] < Math.max(...priorities)) {
            if (--location < 0) location = priorities.length - 1;
            priorities.push(priorities.shift());
        } else {
            ranking++;
            if (--location < 0) return ranking;
            priorities.shift();
        }
    }
}
//math.max(...) 사용시 중복값이 있어도 nan이 나오지 않음 또 const a =[1,2,3]
//일때 (...a) 하면 math.max(1,2,3)으로 들어가서 apply(null,a) 필요xx

function solution(priorities, location) {
    var arr = priorities.map((priority, index) => {
        return {
            index: index, priority: priority
        };
    });
    //맵활용방법도있음

    var queue = [];

    while(arr.length > 0) {
        var firstEle = arr.shift();
        var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
        if (hasHighPriority) {
            arr.push(firstEle);
        } else {
            queue.push(firstEle);
        }
    }

    return queue.findIndex(queueEle => queueEle.index === location) + 1;
}
