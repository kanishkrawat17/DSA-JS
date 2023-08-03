const generateSubArrays = (arr) => {
    let ans = "";

    for(let i=0; i < arr.length ; i++) {
        for(let j=i; j < arr.length; j++) {
            for(let k=i ; k <= j; k++){
                ans = ans + arr[k] + "   ";
            }
            ans = ans + '\n';
        }   
    }
    console.log(ans)
};
generateSubArrays([10, 20, 30]);