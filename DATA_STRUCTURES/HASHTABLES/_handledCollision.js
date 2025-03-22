class hashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size)
    }

    hash(key) {
        let result = 0;
        for (let i = 0; i < key.length; i++) {
            result += key.charCodeAt(i);
        }
        return result % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            let sameKeyItem = bucket.find(item => item[0] == key);
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] == key);
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
    }

    remove(key) {
        let index = this.hash(key);
        let bucket = this.table[index];

        if (bucket) {

            let indexKey = bucket.find(item => item[0] == key);
            if (indexKey !== -1) {
                bucket.splice(indexKey, 1)
                if (bucket.length === 0) {
                    delete this.table[index]
                }
            }
        }
    }

    has(key) {
        let index = this.hash(key);
        let bucket = this.table[index]

        if(bucket) {
            let keyIndex = bucket.find(item => item[0] == key)
            if(keyIndex){
                return true
            }
        }
        return false
    }
}


function firstNonRepeating(str) {
    let map = new hashTable(5);
    for(let char of str){
        map.set(char, (map.get(char) || 0 )+1)
    }
    console.log(map.table);
    for(char of str) {
        if(map.get(char) == 1) {
            return char
        }
    }
}

// console.log(firstNonRepeating("aabccdeff"));


//["eat", "tea", "tan", "ate", "nat", "bat"]
//group anagrams

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(arr) { 
    const map = new hashTable(3);

    for(let char of arr) {
        let sortedWord = char.split('').sort().join('')
        if(map.has(sortedWord)) {
            let existing = map.get(sortedWord);
            existing.push(char)
        }else{
            map.set(sortedWord,[])
        }
    }

    for(let bucket of map.table){
        console.log(bucket);
    }
    //console.log(map.table);
    
}

groupAnagrams(arr);


