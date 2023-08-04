function subsetsOfArray(arr) {
    let result = "";
    let limit = Math.pow(2,arr.length);

    for(let i = limit-1; i >= 0; i--) {
        let digit = i;
        for(let j = arr.length-1; j >= 0; j--){
            let num = digit % 2;
            digit = Math.floor(digit / 2);
            if(num == 0){
                result =  " _ " + result;
            } else {
                result = ` ${arr[j]} ` + result;
            }
        }
        result = "\n" + result;
    }
    console.log(result);
};

subsetsOfArray([10,20,30])