const flattenObject = (obj, o) => {
    for(const key in obj) {
        const val = obj[key]; // object or simpple value,
        const currentKey = `${o}.${key}`; // obj.address.c

        if(typeof val !== 'object') {
            result[currentKey] = val;
        } else {
            flattenObject(val, currentKey);
        }
    }
};

const obj = {
    name: "Kanishk",
    address: {
        city: {
            cityName: 'Delhi',
            street: {
                streetName: 'Krishna',
                streetNo: 5,
            },
        },
    },
    hobbies: ["Badminton", "TableTennis", "Philosphy"],
};

let result = {};
flattenObject(obj, 'obj');
console.log(result);

for(const key in result) {
    console.log(key, "------>", result[key])
};


