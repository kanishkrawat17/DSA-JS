const rotateArray = (arr) => {
    let i = 0, j = arr.length-1; 
    while(i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j]=temp;
        i++;
        j--;
    } 
};
rotateArray([1,2,3,4,4,9]);