const sumOfTwoArrays = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let sum = 0;

    let maxlength = arr1.length > arr2.length ? arr1.length : arr2.length;

    while(i < maxlength) {
        let val1 = arr1[i];
        let val2 = arr2[i];
        if(val1 && val2) {
            sum = val1 + val2;
            result.push(sum);
        } else if(val1) {
            result.push(val1);
        } else if(val2) {
            result.push(val2);
        }
        sum=0;
        i++;
    }
    return result;
};

let arr1 = [3,1,0,7,5];
let arr2 = [1,1,1,1,1,1,1,1,1];

console.log(sumOfTwoArrays(arr1, arr2));
