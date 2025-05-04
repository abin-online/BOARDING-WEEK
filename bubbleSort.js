const arr = [3, -9, 1, 4, 2];

// function bubbleSort(arr) {
//     let n = arr.length;
//     for(let i = 0 ; i < n ; i++) {
//         for(let j = 0 ; j < n - i - 1 ; j++) {
//             if(arr[j+1] < arr[j]) {
//                 [arr[j], arr[j+1]] = 
//                 [arr[j+1], arr[j]];
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([3, -9, 1, 4, 2]))

// function insertionSort(arr) {
//     for(let i = 1 ; i < arr.length ; i++) {
//         let key = arr[i];
//         let j = i - 1
//         while(j >= 0 && arr[j] > key) {
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = key
//     }
//     return arr
// }

// console.log(insertionSort(arr));


function selectionSort(arr) {
    let n = arr.length
    for(let i = 0 ; i < n - 1; i++) {
        let minIndex = i;
        for(let j = i + 1 ; j < n; j++ ) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if(minIndex != i) {
            [arr[minIndex], arr[i]] =
            [arr[i], arr[minIndex]]
        }
    }
    return arr
}

console.log(selectionSort(arr));
