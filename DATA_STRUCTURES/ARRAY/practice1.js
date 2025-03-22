const arr = [2,4,8,9,12,3,4,9,13]

// output = [{a1:2,a2:13},{a1:2,a2:4,a3:9,a4:13},{a1:2,a2:4,a3:8,a4:4,a5:9,a6:13},{a1:2,a2:4,a3:8,a4:9,a5:3,a6:4,a7:9,a8:13},{a1:2,a2:4,a3:8,a4:9,a5:12,a6:3,a7:3,a8:4,a9:9,a10:13}]

let result = []

let i = 0;
let j = arr.length - 1;

while(i <= j){
    let key = 1
    let obj = {}

    for(let k = 0 ; k <= i; k++){
       
        obj[`a${key}`] = arr[k]
        key++
    }
 
    for(let p = j ; p < arr.length; p++){
        //console.log(obj[`a${key}`])
    
            obj[`a${key}`] = arr[p]
            key++  
        
    }
    result.push(obj)
    i++;
    j--
}

console.log(result)
