function flattenArray(arr) {
    for(const val of arr) {
        if(typeof val !== 'object') {
            result.push(val);
        } else {
            flattenArray(val);
        }
    }
};

let result = [];
flattenArray([1,2,3,[4,5, [4,5,6]],[3,4]]);
console.log(result, "Result");
