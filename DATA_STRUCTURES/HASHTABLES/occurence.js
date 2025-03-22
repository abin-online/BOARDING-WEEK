class HashTable {
    constructor(size) {
        this.size = size
        this.table = new Array(size)
    }
    
    hash(key) {
        let result = 0;
        for(let i = 0 ; i < key.length ; i++ ){
            result += key.charCodeAt(0)
        }
        return result % this.size
    }
    
    set(key, value){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key, value]]
        }else{
            let sameKeyItem = bucket.find(item => item[0] == key);
            if(sameKeyItem) {
                sameKeyItem[1] = value
            }else{
                bucket.push([key, value])
            }
        }
    }

    has(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] == key);
            return sameKeyItem ? true : false
        }else{
            return false
        }
    }
    
    get(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] == key);
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
    }
    
    leastOccurence(){
        let word = ''
        let leastCount = Infinity
        for(let key of this.table) {
            if(typeof key == 'object'){
               key.map((x)=> {
                   if(x[1] < leastCount){
                       word = x[0]
                       leastCount = x[1]
                   }
               })
            }
        }
        console.log( `Least count character is ${word} with ${leastCount} occurence` )
    }
    
}

const hash = new HashTable(5);

let word = 'aabbcddeeff';

for(let key of word){
    if(!hash.has(key)){
        hash.set(key, 1)
    }else{
        let value = hash.get(key)
        hash.set(key, value + 1)
    }
}

//console.log(hash.table)
hash.leastOccurence()

