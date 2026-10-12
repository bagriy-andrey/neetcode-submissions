class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hash = {};

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if (hash[diff] !== undefined) {
                return [hash[diff], i];
            } else {
                hash[nums[i]] = i;
            }
        }

        return [];
    }
}

// O(n) time
// O(n) space
