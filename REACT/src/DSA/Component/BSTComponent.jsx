import React, { useState, useEffect } from 'react';

// TreeNode class for BST
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

// BST implementation with additional operations
class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        if (!node) return new TreeNode(value);

        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else if (value > node.value) {
            node.right = this._insert(node.right, value);
        }

        // Update height
        node.height = 1 + Math.max(
            this._getHeight(node.left),
            this._getHeight(node.right)
        );

        return node;
    }

    delete(value) {
        this.root = this._delete(this.root, value);
    }

    _delete(node, value) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this._delete(node.left, value);
        } else if (value > node.value) {
            node.right = this._delete(node.right, value);
        } else {
            // Case 1: Leaf node
            if (!node.left && !node.right) {
                return null;
            }
            // Case 2: Node with only one child
            else if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            }
            // Case 3: Node with two children
            else {
                // Find the smallest value in right subtree
                const successor = this._findMin(node.right);
                node.value = successor.value;
                node.right = this._delete(node.right, successor.value);
            }
        }

        if (!node) return null;

        // Update height
        node.height = 1 + Math.max(
            this._getHeight(node.left),
            this._getHeight(node.right)
        );

        return node;
    }

    _findMin(node) {
        let current = node;
        while (current && current.left) {
            current = current.left;
        }
        return current;
    }

    search(value) {
        return this._search(this.root, value);
    }

    _search(node, value) {
        if (!node) return false;
        if (node.value === value) return true;
        if (value < node.value) return this._search(node.left, value);
        return this._search(node.right, value);
    }

    inOrderTraversal(node = this.root, result = []) {
        if (!node) return result;
        this.inOrderTraversal(node.left, result);
        result.push(node.value);
        this.inOrderTraversal(node.right, result);
        return result;
    }

    preOrderTraversal(node = this.root, result = []) {
        if (!node) return result;
        result.push(node.value);
        this.preOrderTraversal(node.left, result);
        this.preOrderTraversal(node.right, result);
        return result;
    }

    postOrderTraversal(node = this.root, result = []) {
        if (!node) return result;
        this.postOrderTraversal(node.left, result);
        this.postOrderTraversal(node.right, result);
        result.push(node.value);
        return result;
    }

    levelOrderTraversal() {
        const result = [];
        if (!this.root) return result;

        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return result;
    }

    getHeight() {
        return this._getHeight(this.root);
    }

    _getHeight(node) {
        if (!node) return 0;
        return node.height;
    }

    getNodeCount() {
        return this._getNodeCount(this.root);
    }

    _getNodeCount(node) {
        if (!node) return 0;
        return 1 + this._getNodeCount(node.left) + this._getNodeCount(node.right);
    }

    isBST() {
        return this._isBST(this.root, -Infinity, Infinity);
    }

    _isBST(node, min, max) {
        if (!node) return true;

        if (node.value <= min || node.value >= max) {
            return false;
        }

        return (
            this._isBST(node.left, min, node.value) &&
            this._isBST(node.right, node.value, max)
        );
    }

    clear() {
        this.root = null;
    }

    // Helper method to generate the tree visualization data
    getTreeData() {
        if (!this.root) return { nodes: [], links: [] };

        const nodes = [];
        const links = [];

        const calculatePositions = (node, x, y, level = 0, parent = null) => {
            if (!node) return;

            const horizontalSpacing = 60 / (level + 1);

            const nodeData = {
                id: `node-${node.value}`,
                value: node.value,
                x,
                y
            };
            nodes.push(nodeData);

            if (parent !== null) {
                links.push({
                    source: `node-${parent.value}`,
                    target: `node-${node.value}`
                });
            }

            calculatePositions(node.left, x - horizontalSpacing, y + 50, level + 1, node);
            calculatePositions(node.right, x + horizontalSpacing, y + 50, level + 1, node);
        };

        calculatePositions(this.root, 0, 50);

        return { nodes, links };
    }
}

// Component for tree visualization
const TreeVisualization = ({ treeData }) => {
    const { nodes, links } = treeData;
    const width = 600;
    const height = 300;
    const offsetX = width / 2;
    const offsetY = 20;

    return (
        <div className="relative h-64 w-full overflow-auto border rounded bg-gray-50">
            <svg width={width} height={height} className="mx-auto">
                <g transform={`translate(${offsetX}, ${offsetY})`}>
                    {/* Draw links (edges) */}
                    {links.map((link, index) => {
                        const source = nodes.find(n => n.id === link.source);
                        const target = nodes.find(n => n.id === link.target);
                        return (
                            <line
                                key={`link-${index}`}
                                x1={source.x}
                                y1={source.y}
                                x2={target.x}
                                y2={target.y}
                                stroke="#666"
                                strokeWidth="1.5"
                            />
                        );
                    })}

                    {/* Draw nodes */}
                    {nodes.map((node) => (
                        <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                            <circle r="20" fill="white" stroke="#3B82F6" strokeWidth="2" />
                            <text
                                textAnchor="middle"
                                dy=".3em"
                                fontSize="12"
                                fontWeight="bold"
                            >
                                {node.value}
                            </text>
                        </g>
                    ))}
                </g>
            </svg>
        </div>
    );
};

// Main BST Visualizer Component
const BSTVisualizer = () => {
    const [bst] = useState(new BST());
    const [input, setInput] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [deleteInput, setDeleteInput] = useState('');
    const [treeData, setTreeData] = useState({ nodes: [], links: [] });
    const [inOrder, setInOrder] = useState([]);
    const [preOrder, setPreOrder] = useState([]);
    const [postOrder, setPostOrder] = useState([]);
    const [levelOrder, setLevelOrder] = useState([]);
    const [searchResult, setSearchResult] = useState(null);
    const [nodeCount, setNodeCount] = useState(0);
    const [treeHeight, setTreeHeight] = useState(0);
    const [isBST, setIsBST] = useState(true);
    const [message, setMessage] = useState('');

    // Update all tree data
    const updateTreeData = () => {
        setTreeData(bst.getTreeData());
        setInOrder(bst.inOrderTraversal());
        setPreOrder(bst.preOrderTraversal());
        setPostOrder(bst.postOrderTraversal());
        setLevelOrder(bst.levelOrderTraversal());
        setNodeCount(bst.getNodeCount());
        setTreeHeight(bst.getHeight());
        setIsBST(bst.isBST());
    };

    // Handle insert operation
    const handleInsert = () => {
        const value = parseInt(input);
        if (isNaN(value)) {
            setMessage('Please enter a valid number');
            return;
        }

        if (bst.search(value)) {
            setMessage(`Value ${value} already exists in the tree`);
        } else {
            bst.insert(value);
            setMessage(`Inserted ${value} into the tree`);
            updateTreeData();
        }

        setInput('');
    };

    // Handle delete operation
    const handleDelete = () => {
        const value = parseInt(deleteInput);
        if (isNaN(value)) {
            setMessage('Please enter a valid number');
            return;
        }

        if (!bst.search(value)) {
            setMessage(`Value ${value} does not exist in the tree`);
        } else {
            bst.delete(value);
            setMessage(`Deleted ${value} from the tree`);
            updateTreeData();
        }

        setDeleteInput('');
    };

    // Handle search operation
    const handleSearch = () => {
        const value = parseInt(searchInput);
        if (isNaN(value)) {
            setMessage('Please enter a valid number');
            return;
        }

        const found = bst.search(value);
        setSearchResult(found);
        setMessage(found ? `Found ${value} in the tree!` : `${value} not found in the tree`);
        setSearchInput('');
    };

    // Handle clear operation
    const handleClear = () => {
        bst.clear();
        setMessage('Tree cleared');
        updateTreeData();
    };

    // Create a random tree with n nodes
    const handleCreateRandomTree = () => {
        bst.clear();
        const nodeCount = Math.floor(Math.random() * 10) + 5; // 5-15 nodes
        const addedValues = new Set();

        while (addedValues.size < nodeCount) {
            const value = Math.floor(Math.random() * 100);
            if (!addedValues.has(value)) {
                bst.insert(value);
                addedValues.add(value);
            }
        }

        setMessage(`Created a random tree with ${nodeCount} nodes`);
        updateTreeData();
    };

    // Key press handler for inputs
    const handleKeyPress = (e, action) => {
        if (e.key === 'Enter') {
            action();
        }
    };

    // Update tree data on initial render
    useEffect(() => {
        updateTreeData();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-6">BST Visualizer 🌳</h1>

            {/* Tree Visualization */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Tree Visualization</h2>
                {treeData.nodes.length > 0 ? (
                    <TreeVisualization treeData={treeData} />
                ) : (
                    <div className="h-64 w-full flex items-center justify-center border rounded bg-gray-50">
                        <p className="text-gray-500">Empty Tree</p>
                    </div>
                )}
            </div>

            {/* Operations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Insert Operation */}
                <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h3 className="font-semibold mb-2">Insert Node</h3>
                    <div className="flex">
                        <input
                            type="number"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => handleKeyPress(e, handleInsert)}
                            placeholder="Enter a number"
                            className="border rounded px-2 py-1 flex-grow"
                        />
                        <button
                            onClick={handleInsert}
                            className="ml-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                            Insert
                        </button>
                    </div>
                </div>

                {/* Delete Operation */}
                <div className="bg-red-50 p-3 rounded border border-red-200">
                    <h3 className="font-semibold mb-2">Delete Node</h3>
                    <div className="flex">
                        <input
                            type="number"
                            value={deleteInput}
                            onChange={(e) => setDeleteInput(e.target.value)}
                            onKeyPress={(e) => handleKeyPress(e, handleDelete)}
                            placeholder="Enter a number"
                            className="border rounded px-2 py-1 flex-grow"
                        />
                        <button
                            onClick={handleDelete}
                            className="ml-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>

                {/* Search Operation */}
                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                    <h3 className="font-semibold mb-2">Search Node</h3>
                    <div className="flex">
                        <input
                            type="number"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onKeyPress={(e) => handleKeyPress(e, handleSearch)}
                            placeholder="Enter a number"
                            className="border rounded px-2 py-1 flex-grow"
                        />
                        <button
                            onClick={handleSearch}
                            className="ml-2 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                        >
                            Search
                        </button>
                    </div>
                    {searchResult !== null && (
                        <div className={`mt-2 text-sm ${searchResult ? 'text-green-600' : 'text-red-600'}`}>
                            {searchResult ? '✓ Found' : '✗ Not Found'}
                        </div>
                    )}
                </div>

                {/* Tree Operations */}
                <div className="bg-green-50 p-3 rounded border border-green-200">
                    <h3 className="font-semibold mb-2">Tree Operations</h3>
                    <div className="flex space-x-2">
                        <button
                            onClick={handleClear}
                            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 flex-grow"
                        >
                            Clear Tree
                        </button>
                        <button
                            onClick={handleCreateRandomTree}
                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 flex-grow"
                        >
                            Random Tree
                        </button>
                    </div>
                </div>
            </div>

            {/* Message */}
            {message && (
                <div className="mb-4 p-2 bg-blue-100 text-blue-800 rounded text-center">
                    {message}
                </div>
            )}

            {/* Tree Properties */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                <div className="bg-gray-100 p-2 rounded text-center">
                    <h4 className="font-semibold text-sm">Node Count</h4>
                    <p>{nodeCount}</p>
                </div>
                <div className="bg-gray-100 p-2 rounded text-center">
                    <h4 className="font-semibold text-sm">Tree Height</h4>
                    <p>{treeHeight}</p>
                </div>
                <div className="bg-gray-100 p-2 rounded text-center">
                    <h4 className="font-semibold text-sm">Valid BST</h4>
                    <p>{isBST ? '✓ Yes' : '✗ No'}</p>
                </div>
                <div className="bg-gray-100 p-2 rounded text-center">
                    <h4 className="font-semibold text-sm">Tree Balance</h4>
                    <p>{treeHeight <= Math.log2(nodeCount + 1) + 0.5 ? 'Balanced' : 'Unbalanced'}</p>
                </div>
            </div>

            {/* Traversals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                    <h3 className="font-semibold mb-2">In-Order Traversal</h3>
                    <p className="bg-white p-2 rounded overflow-x-auto whitespace-nowrap">
                        {inOrder.length > 0 ? inOrder.join(' → ') : 'Empty'}
                    </p>
                </div>
                <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <h3 className="font-semibold mb-2">Pre-Order Traversal</h3>
                    <p className="bg-white p-2 rounded overflow-x-auto whitespace-nowrap">
                        {preOrder.length > 0 ? preOrder.join(' → ') : 'Empty'}
                    </p>
                </div>
                <div className="bg-pink-50 p-3 rounded border border-pink-200">
                    <h3 className="font-semibold mb-2">Post-Order Traversal</h3>
                    <p className="bg-white p-2 rounded overflow-x-auto whitespace-nowrap">
                        {postOrder.length > 0 ? postOrder.join(' → ') : 'Empty'}
                    </p>
                </div>
                <div className="bg-teal-50 p-3 rounded border border-teal-200">
                    <h3 className="font-semibold mb-2">Level-Order Traversal</h3>
                    <p className="bg-white p-2 rounded overflow-x-auto whitespace-nowrap">
                        {levelOrder.length > 0 ? levelOrder.join(' → ') : 'Empty'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BSTVisualizer;