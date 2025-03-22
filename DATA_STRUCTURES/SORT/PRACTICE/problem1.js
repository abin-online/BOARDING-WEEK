// Given an array of integers where some numbers are repeated, sort the array
// using Merge Sort but ensure that duplicate values appear in the same relative
// order as in the original array

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle)
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    let sorted = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted, ...left, ...right]
}

console.log(mergeSort(arr));
