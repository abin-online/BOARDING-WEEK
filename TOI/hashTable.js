class HashTable {
    constructor(size) {
        this.size = size
        this.table = new Array(size);
    }

    hash(key) {
        let result = 0;
        for (let char of key) {
            result += char.charCodeAt(0);
        }
        return result % this.size
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
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
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] == key);
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] == key);
            if (sameKeyItem) {
                return true
            }
        }
        return false
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, '  ', this.table[i])
            }
        }
    }

    setValue(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            let sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            let itemIndex = bucket.findIndex(item => item[0] === key);
            if (itemIndex != -1) {
                bucket.splice(itemIndex, 1)
            }
        }
    }
}

// function frequency(str) {
//     const hashMap = new HashTable(5)
//     for (let char of str) {
//         const value = hashMap.get(char);
//         if(!value) {
//             hashMap.set(char, 1)
//         }else {
//             hashMap.set(char, value + 1)
//         }
//     }

//     return hashMap.table.forEach(item => {
//         if(item) {
//             const entries = item[0];
//             console.log(entries[0], '  ', entries[1])
//         }
//     })
// }

function occurence(str) {
    const hashMap = new HashTable(5);
    for(let char of str) {
        hashMap.set(char,  (hashMap.get(char) || 0) + 1)
    }
    return hashMap.display()
}

// occurence('malayalam')



function secondMaxOccurence(str) {
    const hashMap = new HashTable(100);

    for(let char of str) {
        hashMap.set(char, (hashMap.get(char) || 0) + 1)
    }

    let maxChar = null
    let count = 0;
    let sMaxChar = null
    let sCount = 0

    hashMap.table.forEach((item) => {
        if(item) {
            const entries = item[0];
            if(entries[1] > count) {
                sMaxChar = maxChar;
                maxChar = entries[0];
                sCount = count;
                count = entries[1]
            }else if(entries[1] > sCount && entries[1] != count) {
                sMaxChar = entries[0];
                sCount = entries[1]
            }         
        }
    })

    return sMaxChar
}

console.log(secondMaxOccurence('malayalamlll'))
