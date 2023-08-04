// https://leetcode.com/problems/single-element-in-a-sorted-array/

/**
 * You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.


Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var singleNonDuplicate = function(arr) {
    for(let i=0; i < arr.length; i=i+2) {
        if(arr[i]!==arr[i+1] ) {
            return arr[i];
        }
    }
};