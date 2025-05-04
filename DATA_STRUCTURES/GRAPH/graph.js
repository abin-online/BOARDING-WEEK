class Graph {
    constructor() {
        this.adjacentList = {}
    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2){
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        this.adjacentList[vertex1].add(vertex2)
        this.adjacentList[vertex2].add(vertex1)
    }

    display() {
        for(let i in this.adjacentList) {
            console.log(`${i} --> ${this.adjacentList[i]}`);
        }
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacentList[vertex1]?.has(vertex2)
    }

    removeEdge(vertex1, vertex2){
        this.adjacentList[vertex1].delete(vertex2)
        this.adjacentList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if(!this.adjacentList[vertex]) return;
        this.adjacentList[vertex].forEach(adjacentVertex => {
            this.removeEdge(adjacentVertex, vertex);
        });
        delete this.adjacentList[vertex]
    }

    breadthFirstSearch(start) {
        const queue = [start], visited = {},  result = []
        visited[start] = true;
        while(queue.length) {
            let currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacentList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            });
        }
        return result;
    }

    hasCycle() {
        const visited = {};

        const dfs = (node, parent)=> {
            visited[node] = true;
            for(let neighbour of this.adjacentList[node]){
                if(!visited[neighbour]){
                    if(dfs(neighbour, node)){
                        return true
                    }
                }else if(neighbour !== parent) {
                    return true;
                }
            }
            return false
        }

        for(let vertex in this.adjacentList) {
            if(!visited[vertex]) {
                if(dfs(vertex, null)) {
                    return true
                }
            }
        }
        return false;
    }

    hasCycle() {
        const visited = {}

        const dfs = (node, parent)=> {
            visited[node] = true;
            for(let neighbour of this.adjacentList[node]){
                if(!visited[neighbour]){
                    if(dfs(node, neighbour)){
                        return true
                    }
                }else if(parent != node){
                    return true
                }
            }
        }
        for(let vertex in this.adjacentList){
            if(!visited[vertex]){
                if(dfs(vertex, null)) {
                    return true
                }
            }
        }

        return false
    }

    hasCyclec() {
        const visited = {}

        const dfs = (node, parent) => {
            visited[node] = true
            for(let neighbour of this.adjacentList[node]){
                if(!visited[neighbour]){
                    if(dfs(neighbour, node)){
                        return true
                    }
                }else if(neighbour != parent) {
                    return true
                }
            }
            return false
        }

        for(let vertex in this.adjacentList){
            if(!visited[vertex]){
                if(dfs(vertex, null)){
                    return true
                }
            }
        }
        return false
    }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A');

console.log(graph.hasCycle())

