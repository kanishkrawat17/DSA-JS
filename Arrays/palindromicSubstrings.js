/**
 * https://leetcode.com/problems/valid-palindrome/submissions/
 * @param {*} str 
 * @returns 
 */

const fs = require("fs")
function palindromicSubstrings(str) {


    for(let i=0; i < str.length; i++) {
        for(let j=i+1; j <= str.length; j++) {
            if(i===str.length-1) return;
            let subStr = str.substring(i, j);
            if(isPalindrome(subStr)){
                console.log(subStr);
            }
        }
    }

    function isPalindrome(str) {
        let i=0, j=str.length-1;

        while(i<=j){
            if(str[i]!==str[j]){ // "abcc"
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}

palindromicSubstrings("abccee");
console.log(process.argv, "HELLO")

const translationFiles = glob.sync(translationPath);