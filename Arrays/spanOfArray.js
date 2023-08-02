const spanOfArray = (arr) => {
   let min =  Number.MAX_VALUE;
   let max = Number.MIN_VALUE;

   arr.forEach(element => {
    if(max < element) max = element;
    if(min > element) min = element;
   });

   console.log(max-min);
};
spanOfArray([15, 30, 40, 4, 11]);
