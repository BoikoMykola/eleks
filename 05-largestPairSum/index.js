/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
    let max = Math.max(...numbers);
    let index = numbers.indexOf(max);
    numbers.splice(index, 1);
    let next = Math.max(...numbers);
    return (max + next);
}
