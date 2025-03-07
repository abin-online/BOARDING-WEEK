class Graph {
    constructor() {
        this.adjacenyList = {}
    }

    addVertex(vertex){
        if(!this.adjacenyList[vertex]){
            this.addVertex[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2){
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        this.adjacenyList[vertex1].add(vertex2)
        this.adjacenyList[vertex2].add(vertex1)
    }

    display() {
        for(let i in this.adjacenyList) {
            console.log(`${i} --> ${this.adjacenyList[i]}`);
        }
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacenyList[vertex1]?.has(vertex2)
    }

    removeEdge(vertex1, vertex2){
        this.adjacenyList[vertex1].delete(vertex2)
        this.adjacenyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if(!this.adjacenyList[vertex]) return;
        this.adjacenyList[vertex].forEach(adjacentVertex => {
            this.removeEdge(adjacentVertex, vertex);
        });
        delete this.adjacenyList[vertex]
    }

    breadthFirstSearch(start) {
        const queue = [start], visited = {},  result = []
        visited[start] = true;
        while(queue.length) {
            let currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacenyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            });
        }
        return result;
    }
}