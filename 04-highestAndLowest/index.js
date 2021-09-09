/**
 * highestAndLowest - Modify initial string into new one, that start with highest number and and with lowest:
 * @param {string} numbers - the source numbers
 * @returns {string} - returns the new string
 */
export const highestAndLowest = (numbers) => {
    let arr = numbers.split(' ');
    let min = Math.min(...arr);
    let max = Math.max(...arr);
return (`${min} ${max}`);
}
