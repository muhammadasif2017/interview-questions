function moveZeroes(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      const temp = nums[i];
      nums[i] = nums[index];
      nums[index] = temp;
      console.log(nums);
      index++;
    }
  }
  console.log(nums);
  return nums;
}

moveZeroes([1, 0, 2, 0, 3]);
