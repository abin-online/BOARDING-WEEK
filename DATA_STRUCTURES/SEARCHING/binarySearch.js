function BinarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while(left <= right) {
        let middle =  Math.floor((left+ right)/2);
        if(arr[middle] < target){
            left = middle + 1
        }else if(arr[middle] > target) {
            right = middle - 1
        }else{
            return middle
        }
    }
    return -1
}

const arr = [4, 5, 6, 7, 8]
console.log(BinarySearch(arr, 8))