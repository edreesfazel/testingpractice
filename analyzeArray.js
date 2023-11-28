/* //this function takes an array of numbers and returns an object with the 
//following properties: average, min, max, and length.
//for example:
// const object = analyzeArray([1,8,3,4,2,6]);

//object == {
    average: 4,
    min: 1,
    max: 8,
    length: 6
}; 
*/

function analyzeArray(array) {
    //calculate the sum of the array elements
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    //calculate the average
    const average = sum / array.length;

    //find the minimum and maximum values in the array
    const min = Math.min(...array);
    const max = Math.max(...array);

    //return the result as an object

    return {
        average: average,
        min: min,
        max: max,
        length: array.length
    };
};

module.exports = analyzeArray