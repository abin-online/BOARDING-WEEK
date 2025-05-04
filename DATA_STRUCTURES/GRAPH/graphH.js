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
        this.adjacentList[vertex2].add(vertex1)
    }

    bfs(start) {
        const queue = [start]
        const visited = {}
        visited[start] = true
        const result = []
        while (queue.length) {
            const curr = queue.shift();
            result.push(curr)
            this.adjacentList[curr].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            });
        }
        return result
    }

    dfs(start) {
        const stack = [start]
        const visited = {}
        visited[start] = true
        const result = []
        while (stack.length) {
            const curr = stack .pop();
            result.push(curr)
            this.adjacentList[curr].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }
        return result
    }

    hasCycle() {
        const visited = {}

        const dfs = (node, parent) => {
            visited[node] = true
            for (let neighbour of this.adjacentList[node]) {
                if (!visited[neighbour]) {
                    if (dfs(neighbour, node)) {
                        return true
                    }
                } else if (neighbour != parent) {
                    return true
                }
            }
            return false
        }

        for (let vertex in this.adjacentList) {
            if (!visited[vertex]) {
                if(dfs(vertex, null))
                    return true
            }
        }
        return false
    }
}