// https://leetcode.com/problems/binary-search/submissions/
const binarySearch = (arr, element) => {
    let start = 0, end = arr.length-1;
    
    while(start <= end) {
        let midIdx = Math.floor((start+end)/2);
        let midVal = arr[midIdx];
        if(midVal === element) {
            console.log(midIdx);
            return midIdx;
        } else if(midVal < element) {
            start = midIdx+1;
        } else {
            end = midIdx-1;
        }
    }
    console.log('no such element present');

};

binarySearch([1,2,34,5,6,432], 42);