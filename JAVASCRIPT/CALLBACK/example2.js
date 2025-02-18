// to leverage callbacks to handle and manipulate data in arrays

function forEachElement (nums, callback) {
    for(let i = 0 ; i < nums.length ; i++ ){
        callback(nums[i], i)
    }
}

let nums = [2, 3, 5, 6, 7]

forEachElement(nums, (element, index)=> {
    console.log(`Element of index ${index} is ${element}`)
})
