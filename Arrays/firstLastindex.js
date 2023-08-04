const firstLastindex = (arr, target)  => {
   let lastIndex = findIndex(arr, target, 'lastIndex');
   let firstIndex = findIndex(arr, target, 'firstIndex');

   console.log(firstIndex, lastIndex);

};
function findIndex(arr, target, type) {
    let index;
    let lo=0, hi=arr.length-1;

    while(lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if(arr[mid] === target) {
            index = mid;
            if(type==='firstIndex'){
                hi = mid-1;
            } else {
                lo = mid + 1;
            }
        } else if(target > arr[mid]) {
            if(type === 'firstIndex') {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        } else {
            if(type === 'firstIndex') {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }
    return index;
}


firstLastindex([10,20,30,70,70,70,100,120], 70);

