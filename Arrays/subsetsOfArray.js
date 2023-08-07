/**
 * 
 * https://leetcode.com/problems/subsets/description/
 */

var subsets = function(arr) {
    let limit = Math.pow(2, arr.length);
    let subsets = [];

    for(let i = limit-1; i >= 0; i--) {
        let num = i;
        let subset=[];
        for(let j = arr.length-1; j >= 0; j--) {
            let digit = num % 2;
            num = Math.floor(num / 2);
            if(digit != 0) {
                subset.push(arr[j]);
            }
        }
        subsets.push(subset);
    }
    return subsets;
};


subsets([10,20,30])