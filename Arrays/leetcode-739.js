/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let len = temperatures.length-1;

    let result = Array(len+1).fill(0);
    result[len]=0;

    let st = []; // stack

    for(let i=temperatures.length-1; i >= 0; i--) {
       let val = temperatures[i];

       while(st.length > 0 && val >= temperatures[st[0]]) {
           st.shift();
       }

        if(st.length===0) {
            result[i]=0;
        } else {
            result[i]=st[0]-i;
        }

       st.unshift(i);
    }
    return result;
};

console.log(dailyTemperatures([34,80,80,34,34,80,80,80,80,34]));
// console.log(dailyTemperatures([34(0), 80(1), 80(2), 34(3), 34(4) ,80(5), 80(6),80(7) , 80(8), 34(9)]));