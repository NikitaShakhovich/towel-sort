module.exports = function towelSort (matrix) {
    let result = []
    if (matrix == undefined || matrix.length === 0) {
        return result
    } else {
        for (let i = 1; i < matrix.length; i++) {
            if(i%2 === 1) {
                matrix[i] = matrix[i].reverse();
            }
        }
    }

    result = matrix.join(',').split(',').map(Number);
    return result
}
