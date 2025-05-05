class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      this.root = this._insert(this.root, value);
    }
  
    _insert(node, value) {
      if (!node) return new TreeNode(value);
      if (value < node.value) node.left = this._insert(node.left, value);
      else node.right = this._insert(node.right, value);
      return node;
    }
  
    inOrderTraversal(node = this.root, result = []) {
      if (!node) return result;
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
      return result;
    }
  }
  
  export default BST;
  