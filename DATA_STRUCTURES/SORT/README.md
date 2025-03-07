# 1. Bubble Sort Algorithm

## 🛠 Introduction
Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process continues until the list is sorted.

## 🛠 How Bubble Sort Works
1. Start from the first element and compare it with the next one.
2. If the next element is smaller, swap them.
3. Move to the next pair and repeat step 2.
4. After one full pass, the largest element bubbles up to the last position.
5. Repeat the process for the remaining elements, ignoring the last sorted elements in each pass.
6. The process continues until the array is sorted.

## 📌 Key Takeaways
✅ Simple to implement  
✅ Not efficient for large arrays (O(n²))  
✅ Best for small or nearly sorted data  
✅ Optimized version reduces unnecessary passes  

## 📝 Example Implementation in JavaScript
```javascript
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
                swapped = true;
            }
        }
        if (!swapped) break; // Stop if no swaps
    }
    return arr;
}

console.log(bubbleSort([3, 1, 4, -2])); // Output: [-2, 1, 3, 4]
```

## 🚀 Optimized Version
The optimized version of Bubble Sort stops early if no swaps happen in a pass, making it more efficient for nearly sorted data.

## 📚 Time Complexity
- **Worst Case (Reversed Order):** O(n²)
- **Best Case (Already Sorted + Optimization):** O(n)

## 📌 When to Use Bubble Sort?
- When the dataset is small.
- When the dataset is already nearly sorted.
- When learning sorting algorithms, as it provides a good conceptual understanding.

Bubble Sort is a great learning tool but is not used in real-world applications due to its inefficiency. Faster algorithms like **Merge Sort** and **Quick Sort** are preferred.

# 2. Insertion Sort Algorithm

## 🛠 Introduction
Insertion Sort is a simple and efficient comparison-based sorting algorithm that builds the sorted array one element at a time. It works similarly to how we sort playing cards in our hands.

## 🛠 How Insertion Sort Works
1. Start from the second element (index 1) and compare it with the previous elements.
2. Shift elements that are greater than the key to the right.
3. Insert the key at its correct position.
4. Repeat the process for all elements until the array is sorted.

## 📌 Key Takeaways
✅ Simple to implement and efficient for small datasets  
✅ Works well with nearly sorted data (Adaptive: O(n) in best case)  
✅ Stable sorting algorithm (preserves the relative order of equal elements)  
✅ Inefficient for large datasets (O(n²) in worst case)  

## 📝 Example Implementation in JavaScript
```javascript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort([3, 65, 9, -3, 23.2])); // Output: [-3, 3, 9, 23.2, 65]
```

## 🚀 Optimized Version
Insertion Sort is inherently adaptive, meaning it performs well on nearly sorted data. No additional optimizations are typically required.

## 📚 Time Complexity
- **Worst Case (Reversed Order):** O(n²)
- **Best Case (Already Sorted):** O(n)
- **Average Case:** O(n²)

## 📌 When to Use Insertion Sort?
- When sorting small datasets.
- When the dataset is nearly sorted.
- When a stable sorting algorithm is needed.
- When minimal memory usage is required (works in-place).

Insertion Sort is a great learning tool and is sometimes used in practice for small or nearly sorted datasets. However, for large datasets, more efficient algorithms like **Merge Sort** and **Quick Sort** are preferred.

# 3 Selection Sort Algorithm
 
## 🛠 Introduction
Selection Sort is a simple comparison-based sorting algorithm that divides the array into a sorted and an unsorted region. It repeatedly selects the smallest (or largest) element from the unsorted region and swaps it with the first element of that region.

## 🛠 How Selection Sort Works
1. Find the smallest element in the array.
2. Swap it with the first element.
3. Move to the next position and repeat the process for the remaining unsorted elements.
4. Continue until the entire array is sorted.

## 📌 Key Takeaways
✅ Simple to implement and easy to understand  
✅ Performs well on small datasets  
✅ Not a stable sorting algorithm (may change the relative order of equal elements)  
✅ Inefficient for large datasets (O(n²) in all cases)  
✅ Uses minimal memory (works in-place, O(1) space complexity)  

## 📝 Example Implementation in JavaScript
```javascript
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
        }
    }
    return arr;
}

console.log(selectionSort([3, 65, 9, -3, 23.2])); // Output: [-3, 3, 9, 23.2, 65]
```

## 📚 Time Complexity
- **Worst Case:** O(n²)
- **Best Case:** O(n²) (no adaptive behavior like Insertion Sort)
- **Average Case:** O(n²)

## 📌 When to Use Selection Sort?
- When sorting small datasets.
- When memory usage is a concern (requires minimal extra space).
- When a simple sorting algorithm is needed for educational purposes.

Selection Sort is not efficient for large datasets, as its time complexity remains O(n²) in all cases. Algorithms like **Merge Sort**, **Quick Sort**, and **Heap Sort** are generally preferred for better performance.

# 4 QuickSort Algorithm

## 🛠 Introduction
QuickSort is a highly efficient and widely used sorting algorithm that follows the **divide-and-conquer** approach. It selects a pivot element and partitions the array into two subarrays: one with elements smaller than the pivot and one with elements greater than the pivot. This process is repeated recursively until the array is sorted.

## 🛠 How QuickSort Works
1. Select a pivot element from the array (commonly the last, first, or a randomly chosen element).
2. Partition the array so that elements smaller than the pivot are on the left and elements greater than the pivot are on the right.
3. Recursively apply QuickSort to the left and right subarrays.
4. Combine the sorted subarrays to get the final sorted array.

## 📌 Key Takeaways
✅ Efficient and widely used sorting algorithm  
✅ Works well for large datasets  
✅ Not a stable sorting algorithm (does not preserve the relative order of equal elements)  
✅ Uses O(log n) additional space in the best case (due to recursion)  
✅ Average and best-case time complexity: O(n log n)  

## 📝 Example Implementation in JavaScript
```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    let pivot = arr[arr.length - 1]; // Choosing the last element as pivot
    let left = [], right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([3, 65, 9, -3, 23.2])); // Output: [-3, 3, 9, 23.2, 65]
```

## 📚 Time Complexity
- **Worst Case (Already Sorted, Poor Pivot Choice):** O(n²)
- **Best Case (Balanced Partitioning):** O(n log n)
- **Average Case:** O(n log n)

## 📌 When to Use QuickSort?
- When sorting large datasets.
- When an efficient, in-place sorting algorithm is needed.
- When recursion depth is not a major concern.
- When a stable sort is **not** required.

QuickSort is one of the fastest sorting algorithms in practice and is widely used in real-world applications. However, for worst-case scenarios, **Merge Sort** may be a better alternative.

# 5 Merge Sort Algorithm

## 🛠 Introduction
Merge Sort is a highly efficient and stable sorting algorithm that follows the **divide-and-conquer** approach. It recursively divides the array into two halves, sorts them individually, and then merges them back together in a sorted manner.

## 🛠 How Merge Sort Works
1. Divide the array into two halves.
2. Recursively apply Merge Sort on both halves.
3. Merge the sorted halves by comparing elements and placing them in order.
4. Repeat the process until the entire array is sorted.

## 📌 Key Takeaways
✅ Stable sorting algorithm (preserves the relative order of equal elements)  
✅ Suitable for large datasets  
✅ Efficient with time complexity O(n log n) in all cases  
✅ Requires additional space for merging (O(n) space complexity)  
✅ Preferred for linked lists and external sorting  

## 📝 Example Implementation in JavaScript
```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort([3, 65, 9, -3, 23.2])); // Output: [-3, 3, 9, 23.2, 65]
```

## 📚 Time Complexity
- **Worst Case:** O(n log n)
- **Best Case:** O(n log n)
- **Average Case:** O(n log n)

## 📌 When to Use Merge Sort?
- When stability is required.
- When sorting linked lists.
- When working with large datasets where QuickSort’s worst-case O(n²) is a concern.
- When additional memory usage (O(n)) is not a problem.

Merge Sort is a great choice for sorting when stability and guaranteed O(n log n) performance are required, despite its higher space complexity.

