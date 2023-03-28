function threeSum(S, target) {
// write your code here
	 S.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1, right = S.length - 1;
    while (left < right) {
      const sum = S[i] + S[left] + S[right];
      if (sum === target) {
        return target;
      }
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
  
}

module.exports = threeSum;
