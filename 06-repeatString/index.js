/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        let newArr = Array(i + 1).fill(arr[i].toLowerCase(), 0);
        newArr[0] = String( newArr[0]).toUpperCase();
        arr[i] = newArr.join('');
    }
    return arr.join('-')
}
