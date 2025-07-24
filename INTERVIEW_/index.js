const arr = [0, 1, 0, 0, 1, 1, 0];

function sortOneZero(arr) {
    let left = 0;
    let right = arr.length - 1
    while (left <= right) {
        if (arr[left] == 1 && arr[right] != 1) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++
            right--
        }
        left++
    }
    console.log(arr)
}

sortOneZero(arr)


// function bubbleSort(arr) {
//     let n = arr.length;
//     for(let i = 0 ; i < n ; i++) {
//         let swapped = false
//         for(let j = 0; j < n - i - 1 ; j++) {
//             if(arr[j] > arr[j+1]) {
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//                 swapped = true
//             }
//         }
//         if(!swapped) {
//             break
//         }
//     }
//     return arr
// }

// console.log(bubbleSort(arr))

// function quickSort(arr) {

//     if(arr.length < 2) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1];

//     let left = [];
//     let right = [];
//     for(let i = 0 ; i < arr.length - 1 ; i++) {
//         if(arr[i] < pivot) {
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }


//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// console.log(quickSort(arr));
