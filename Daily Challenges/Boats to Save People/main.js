// https://leetcode.com/problems/boats-to-save-people/

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    let boatCount = 0;
    people = people.sort((a, b) => a-b);

    let left = 0;
    let right = people.length - 1;

    while (left <= right) {
        let sum = people[left] + people[right];
        if (sum <= limit) {
            boatCount++;
            left++;
            right--;
        }
        else {
            boatCount++;
            right--;
        }
    }
    return boatCount;
};

console.log(numRescueBoats([1, 2], 3));
console.log(numRescueBoats([3, 2, 2, 1], 3));
console.log(numRescueBoats([3, 5, 3, 4], 5));
console.log(numRescueBoats([2, 4], 5));
console.log(numRescueBoats([5, 1, 4, 2], 6));
