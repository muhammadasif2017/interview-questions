function singleNumber(nums) {
  if (!Array.isArray(nums)) throw new Error("Provide numbers array");
  if (nums.length === 0) {
    return nums[nums.length - 1];
  }

  let xor = 0;
  for (let num of nums) {
    console.log("Number", num);
    console.log("Before op", xor);
    xor ^= num;
    console.log("After op", xor);
  }
}

singleNumber([1, 2, 2, 1]);
