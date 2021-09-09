export const getLastWordLength = str => {
    let arr = str.trim().split(' ');
    return arr[arr.length - 1].length;
};
