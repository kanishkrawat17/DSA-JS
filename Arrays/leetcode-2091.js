/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(arr) {
    const minValIdx = arr.indexOf(Math.min(...arr));// 5
    const maxValIdx = arr.indexOf(Math.max(...arr)) // 1

    const midIdx = Math.floor((arr.length-1)/2); // 3
    let leftResult=0;
    let rightResult=0;

    if(minValIdx <= midIdx) { // 5 <= 3
        leftResult+= minValIdx+1;
    }
    if(minValIdx > midIdx){ // 5 > 3 = 7-5+1=3
        leftResult+= arr.length-1 - minValIdx+1;
    } 
    if(maxValIdx <= midIdx) { // 1 <= 3
        rightResult+= maxValIdx+1; 
    } 
    if(maxValIdx > midIdx) {
        rightResult+=  arr.length-1 - maxValIdx+1;
    }

    if((minValIdx <=  midIdx && maxValIdx <= midIdx) || (minValIdx > midIdx && maxValIdx > midIdx)) { 
        return Math.max(leftResult, rightResult);
    } else {
        return leftResult+rightResult;
    }

};


// minimumDeletions([2,10,7,4,1,9,8,6,5]);
// minimumDeletions([2,10,7,5,4,1,8,6]);
minimumDeletions([101]);
// minimumDeletions( [0, -4, 19, 1, 8, -2, -3, 5]);

// [2,10,7,5,4,1,8,6]

// midIdx=3
// minValId5+1x=5
// maxValIdx=1