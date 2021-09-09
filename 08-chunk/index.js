// TODO: rename function, maybe array-of-arrays

export const chunk = (arr = [], size = 0) => {
    let chunkArr = [];
    for (let i = 0, j = arr.length; i < j; i += size) {
        chunkArr.push(arr.slice(i, i + size));
    }
    return chunkArr;
};
