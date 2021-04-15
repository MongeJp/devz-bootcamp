const twoSum = (nums: Array<number>, target: number): Array<number> => {
    let dictionary = {};
    for (let index = 0; nums.length > index; index++) {
        const element = nums[index];
        const result = (target - element).toString();
        if (dictionary.hasOwnProperty(result)) {
            return [dictionary[result], index];
        }
        dictionary[element] = index;
    }
};

twoSum([2, 7, 1, 5], 9);