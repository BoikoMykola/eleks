/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    fields.forEach(item => {
        for (const key in obj) {
            if (key === item) {
                delete obj[key];
            }
        }

    });
    return obj;
};
