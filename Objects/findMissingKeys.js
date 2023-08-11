const nestedObject = {
    a: '',
    b: {
      c: 'non-empty',
      d: '',
      e: {
        f: '',
        g: 'non-empty'
      }
    },
    h: 'non-empty'
  };
 
  let noOfEmptyKeys=0;
  let emptyKeys=[];
  const findMissingKeys = (obj , currentKey) => {
    for(const key in obj) {
        const value = obj[key];

        if(typeof value !== 'object') {
            if(!value) {
                noOfEmptyKeys++;  
                emptyKeys.push([{
                    key: `${currentKey}.${key}`
                }]); 
            }
        } else {    
            const nestedKey = `${currentKey}.${key}`; // nestedObject.b.e
            findMissingKeys(value, nestedKey, noOfEmptyKeys);
        }
    }
  };


  findMissingKeys(nestedObject, 'nestedObject');
  console.log(noOfEmptyKeys, emptyKeys)