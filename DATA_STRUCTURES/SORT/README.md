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