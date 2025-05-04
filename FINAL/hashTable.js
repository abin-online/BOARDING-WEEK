class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size
    }

    hash(key) {
        let result = 0;
        for (let char of key) {
            result += char.charCodeAt(0);
        }
        return result % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
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
        let index = this.hash(key)
        let bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find(item => item[0] == key);
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
    }

    remove(key) {
        let index = this.hash(key)
        let bucket = this.table[index];
        if (bucket) {
            let itemIndex = bucket.findIndex(item => item[0] == key);
            if (itemIndex !== 1) {
                bucket.splice(itemIndex, 1)
            }
        }
    }
}