let maxGrade = 95
let getGrade = function(gradeData,gradePercentile = gradeData/maxGrade*100) {   
    

    if (gradeData >= 90) {
    return 'A ' + gradePercentile + '%';
    }
    if (gradeData >= 80) {
    return 'B ' + gradePercentile + '%';
    }
    if (gradeData >= 70) {
    return 'C ' + gradePercentile + '%';
    }
    if (gradeData >= 60) {
    return 'D ' + gradePercentile + '%';
    }
    if (gradeData >= 50) {
    return 'E ' + gradePercentile + '%';
    }
    if (gradeData <= 49) {
    return 'F ';
    }

}

let result = getGrade(78);
console.log(result);