/**
 * 
 * @param {*} arr 
 * @param {number of rotations} k 
 */

const reverseAnArray = (arr, k) => {
    k =  k % arr.length ;
    if(k < 0) {
        k = arr.length + k;
    }

    rotateArray(arr, 0, arr.length-k-1);
    rotateArray(arr, arr.length-k, arr.length-1);
    rotateArray(arr, 0, arr.length-1);

    console.log(arr)
};

const rotateArray = (arr, i, j) => {
    while(i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
};

reverseAnArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],3);
/**
 * Output => ['f', 'g', 'h', 'a', 'b', 'c', 'd', 'e', ]
 */