// Solution 1:
// Using JavaScript Built-in Map data structure
// function twoSum(nums, target) {
//   const hashMap = new Map();

//   for (let i = 0; i < nums.length; i += 1) {
//     if (hashMap.has(target - nums[i])) {
//       return [hashMap.get(target - nums[i]), i];
//     } else {
//       hashMap.set(nums[i], i);
//     }
//   }
//   return null;
// }

// Solution 2:
// Using JavaScript native Object
function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (target - nums[i] in map) {
      return [map(target - nums[i]), i];
    } else {
      map[nums[i]] = i;
    }
  }
  return null;
}

console.log(twoSum([2, 7, 8, 3, 5], 8));
