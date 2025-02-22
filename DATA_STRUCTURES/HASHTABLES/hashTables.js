class hashTable {
    constructor(size) {
        this.size = size
        this.table = new Array(size);
    }

    _hash(key) {
        let result = 0;
        for(let i = 0 ; i < key.length ; i++) {
            result += key.charCodeAt(i)
        }
        return result % this.size
    }

    set(key, value) {
        let index = this._hash(key)
        this.table[index] = value
    }

    get(key) {
        let index = this._hash[key];
        return this.table[index]
    }

    remove(key) {
        let index = this._hash(key);
        this.table[index] = undefined
    }

    display() {
        for(let i = 0 ; i < this.size ; i++) {
            if(this.table[i]){
                console.log(i, '->' , this.table[i])
            }
        }
    }
}