const barChart = (arr) => {
    const max = Math.max(...arr);
    let ans = "";

    for(let i = 0; i < max; i++){
        for(let val of arr){
          if(val >= max - i){
            //  System.out.print("*\t");
             ans+="*  ";
          } else {
            ans+="__ ";
          }
        }
 
        console.log("\n")
     }
    console.log(ans)
};

barChart([3,4,2,7]);
