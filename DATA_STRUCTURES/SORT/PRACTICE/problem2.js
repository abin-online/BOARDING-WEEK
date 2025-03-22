// Given a sorted array, find the pair of elements
// with the smallest absolute difference.

const arr = [-5, -2, 0, 2, 10]

function closestPair(arr) {
    let result = []
    let minDifference = Infinity;
    for(let i = 1 ; i < arr.length; i++) {
        let difference = arr[i+1] - arr[i];
        if(difference < minDifference){
            minDifference = difference
            result = [arr[i], arr[i+1]]
            console.log(result);
        }
    }
    return result
}

console.log(closestPair(arr));
