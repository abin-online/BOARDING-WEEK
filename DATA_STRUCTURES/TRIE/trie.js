class Node {
    constructor() {
        this.children = {}
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // autoComplete(words){
    //     let node = this.root;
    //     for(let char of words){
    //         if(!node.children[char]){
    //             return `no suggestions`
    //         }
    //         node = node.children[char];
    //     }
    //     return this._collectWords(node, prefix)
    // }

    // _collectWords(node = this.root, prefix = '') {
    //     let words = [];
    //     const traverse = (node, currentPrefix) => {
    //         if(node.isEndOfWord){
    //             words.push(currentPrefix)
    //         }
    //         for(let char in node.children) {
    //             traverse(node.children[char], currentPrefix + char)
    //         }
    //     }
    //     traverse(node, prefix);
    //     return words
    // }

    autoComplete(prefix) {
        let node = this.root;
        for (let char of words) {
            if (!node.children[char]) {
                return 'no suggestions'
            }
            node = node.children[char];
        }
        return this._collectWords(node, prefix)
    }

    _collectWords(node, prefix) {
        let words = [];
        const traverse = (node, currPrefix) => {
            if (node.isEndOfWord) {
                words.push(currPrefix)
            }
            for (let char in node.children) {
                traverse(node.children[char], currPrefix + char)
            }
        }
        traverse(node, prefix);
        return words
    }
}