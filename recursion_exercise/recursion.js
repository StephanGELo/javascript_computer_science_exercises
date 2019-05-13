function contains (obj, target) {
    // return true;
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            return contains(obj[key], target);
        } else {
            if (obj[key] === target) {
                return true;
            }
        }
    }
    return false;
}

module.exports = {
    contains
}