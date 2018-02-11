function dfs(node) {
var stack = [];
var visited = [];
stack.push(node)

  while(stack.length){
    var currentNode = stack.pop()

  }

}

function adjacent(node, visited=[]) {
  visited.push(node)
  if (!node.children){
    return node
  }
  var list = node.children
  for (var i = 0; i < list.length; i++) {
    adjacent(list[i], visited)
  }
  return visited
}






function Traverse(p_element,p_callback) {
   p_callback(p_element);
   var list = p_element.children;
   for (var i = 0; i < list.length; i++) {
       Traverse(list[i],p_callback);  // recursive call
   }
}


function Traverse(p_element, arr = []) {
   arr.push(p_element);
   var list = p_element.children;
   for (var i = 0; i < list.length; i++) {
       Traverse(list[i],arr);  // recursive call
   }
   return arr
}
