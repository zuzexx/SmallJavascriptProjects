/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/

const runningSum = (array) => {
  for (let i = 1; i < array.length; i++) {
    let newValue = array[i - 1] + array[i];
    array[i] = newValue;
  }
  return array;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1, 1]));
console.log(runningSum([1, 2, 3, 4, 5, 6]));
console.log(runningSum([1, 2, 3, 3, 2, 1]));
