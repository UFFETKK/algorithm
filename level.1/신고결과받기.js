function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    const new_report = [...new Set(report)]
    let report_list={}
    
    id_list.map((item) => {
        report_list[item] =[]
    })
    
    new_report.map((item)=>{
        const [reportt, reported] = item.split(" ")
        if (!report_list[reported].includes(reportt)) {
            report_list[reported].push(reportt)
        }
    })
    
    for (const item in report_list) {
        if(report_list[item].length >=k) {
            report_list[item].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    return answer;
}
