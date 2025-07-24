const arr = [{ userId: 1, parentId: 2 }, { userId: 2, parentId: null }, { userId: 3, parentId: 2 }, { userId: 4, parentId: 3 }];

// {userId: 3, parentId : 7, children : [{}]}

function generateTree(arr) {
    const map = {}

    arr.forEach(Node => {
        Node.children = []
        map[Node.userId] = Node
    });

    const root = [];

    arr.forEach(Node => {
        if (Node.parentId == null) {
            root.push(Node)
        } else {
            const parent = map[Node.parentId];
            if (parent) {
                parent.children.push(Node)
            }
        }
    });

    return root
}

console.log(JSON.stringify(generateTree(arr)))
