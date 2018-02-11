let tree = {data: 6,
  right: {data: 8, left: null, right: null},
  left: {data: 1,
  right: {data: 4, right: null, left: null},
  left: null}
}


var SecondTree = {data: 5, left:
                  {data: 3, left: null, right: null},
                    right: {data: 7, left: null,
                    right: {data: 9, left: null, right: null}
                  }}



function checkBinaryTree(node, rootNode) {
  let result = "Yes";
  let rootData = rootNode.data
  if (node.left){
    if (node.left.data > rootData || node.left.data > node.date){
      result = "No"
      return result
    } else {
      return checkBinaryTree(node.left, rootNode)
    }
  }
    if(node.right){
      if (node.right.data < rootData || node.right.data < node.data) {
        result = "No"
        return result
      } else {
        return checkBinaryTree(node.right, rootDate)
      }
    }
  return result
}

     10
    /  \
    8   22
     \  \
      9  14

    10
    /  \
    8   22
    /   \
    9      14

let newNode = {data: 3, leftChild: null, rightChild: null}

    function findOrCreate(node, inputNode) {
      if(node.data === inputNode.data){
        return true
      };

      if (inputNode.data < node.data){
        if(node.left){
          return findOrCreate(node.left, inputNode)
        } else {
          node.left = inputNode
        }
      }

      if (inputNode.data > node.data){
        if(node.right){
          return findOrCreate(node.right, inputNode)
        } else {
          node.right = inputNode
        }
      }
      return "Inputed"
    }
