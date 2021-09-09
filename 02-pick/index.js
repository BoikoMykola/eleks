/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let objResult = {};
    fields.forEach(item => {
        for (const key in obj) {
            if (key === item) {
                objResult[key] = obj[key];
            }
        }

    });
    return objResult;
};
