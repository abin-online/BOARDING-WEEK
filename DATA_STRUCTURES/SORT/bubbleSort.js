function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]]
                    = [arr[j + 1], arr[j]];
                swapped = true
            }
        }
        if (!swapped) break;
    }
    return arr;
}





console.log(bubbleSort([3, 1, 4, -2]));
