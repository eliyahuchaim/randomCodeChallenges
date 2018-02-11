def isBST(node, left=None, right=None):
    if not node:
        return True
    if left and node.data >= left:
        return False
    if right and node.date <= right:
        return False
    return isBST(node.left,node.data,right) and isBST(node.right,left, node.data)
