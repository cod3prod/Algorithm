class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    // 전위 순회 (Preorder Traversal)
    preorderTraversal(node, result = []) {
        if (node) {
            result.push(node.value); // 노드 값 추가
            this.preorderTraversal(node.left, result); // 왼쪽 자식
            this.preorderTraversal(node.right, result); // 오른쪽 자식
        }
        return result;
    }

    // 중위 순회 (Inorder Traversal)
    inorderTraversal(node, result = []) {
        if (node) {
            this.inorderTraversal(node.left, result); // 왼쪽 자식
            result.push(node.value); // 노드 값 추가
            this.inorderTraversal(node.right, result); // 오른쪽 자식
        }
        return result;
    }

    // 후위 순회 (Postorder Traversal)
    postorderTraversal(node, result = []) {
        if (node) {
            this.postorderTraversal(node.left, result); // 왼쪽 자식
            this.postorderTraversal(node.right, result); // 오른쪽 자식
            result.push(node.value); // 노드 값 추가
        }
        return result;
    }
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const binaryTree = new BinaryTree(root);

console.log("Preorder Traversal:", binaryTree.preorderTraversal(binaryTree.root)); // [1, 2, 4, 5, 3]
console.log("Inorder Traversal:", binaryTree.inorderTraversal(binaryTree.root)); // [4, 2, 5, 1, 3]
console.log("Postorder Traversal:", binaryTree.postorderTraversal(binaryTree.root)); // [4, 5, 2, 3, 1]
