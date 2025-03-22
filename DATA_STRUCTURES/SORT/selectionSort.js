function selectionSort(arr){
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        let minIndex = i;
        for(let j = i + 1 ; j < n ; j++) {
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(i != minIndex){
            [arr[i], arr[minIndex]]
            = [arr[minIndex], arr[i]]
        }
    }
    return arr
}

console.log(selectionSort([3, 65, 9, -3, 23.2]));
