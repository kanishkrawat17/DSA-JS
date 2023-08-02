const getDigitFrequency = (number, digit) => {
    let digitCount = 0;
    const numStr = number.toString();
    numStr.split('').forEach((num) => {
        if(num == digit) digitCount++;
    });
    console.log(digitCount)

};
getDigitFrequency(994543234, 4);
