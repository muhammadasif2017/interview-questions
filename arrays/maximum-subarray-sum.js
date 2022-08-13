function maximumSubarraySum(nums) {
  let sum = nums[0];
  let currentSum = sum;

  for (let i = 1; i < nums.length; i += 1) {
    currentSum = Math.max(nums[i], nums[i] + currentSum);
    sum = Math.max(currentSum, sum);
  }

  return sum;
}
