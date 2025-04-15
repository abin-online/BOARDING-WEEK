class Graph {
    constructor() {
        this.adjacentList = {}
    }

    addVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacentList[vertex1].add(vertex2);
        this.adjacentList[vertex2].add(vertex1);
    }

    depthFirstSearch(start) {
        const visited = {}
        const stack = []
        stack.push(start);
        visited[start] = true
        let result = []
        while (stack.length) {
            const curr = stack.pop()
            result.push(curr)
            this.adjacentList[curr].forEach(neighbour => {
                if (!visited[neighbour]) {
                    stack.push(neighbour);
                    visited[neighbour] = true
                }
            });
        }
        return result
    }
}

const graph = new Graph()

graph.addEdge('A', 'B');
graph.addEdge('B', 'C')
graph.addEdge('C', 'A');
graph.addEdge('D', 'A');

console.log(graph.depthFirstSearch('A'))