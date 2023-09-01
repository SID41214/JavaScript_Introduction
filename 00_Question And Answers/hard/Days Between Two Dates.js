function getdays(date1,date2){
    let out= date2-date1;
    let diff=out/(1000*60*60*24);
    return Math.round(diff);
}
console.log(getdays(new Date("June 14, 2019"),
new Date("June 20, 2019")));