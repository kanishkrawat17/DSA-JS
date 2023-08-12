// https://leetcode.com/problems/contains-duplicate/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsSet = {};

    for(let i=0; i < nums.length; i++) {
        const key = nums[i];
        if(numsSet.hasOwnProperty(key)) {
            return true;
        } else {
            numsSet[key]=key;
        }
    };
    return false;
};

// var containsDuplicate = function(nums) {
//     return new Set(nums).size === nums.length ? false : true;
// };

