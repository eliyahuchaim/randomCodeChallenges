var set1 = "{[()]}";
var set2 = "{[(])}";
var set3 = "{{[[(())]]}}";
var set4 = "([]){()}";
var set5 = "{()[]}"


// first attempt

function checkBrackets(expression){
  if (expression === "" || expression.length === 0){
    return "Yes"
  } else {
    let middle = expression[(expression.length / 2) - 1] + expression[expression.length / 2]
    if (middle == "()" || middle == "{}" || middle == "[]"){
      return checkBrackets(expression.substring(0, expression.length / 2 - 1) + expression.substring(expression.length / 2 + 1))
    } else {
      return "No"
    }
  }
}

// second solution === works

function checkBrackets(expression){
  let stack = [];
  var result = "YES";
    for (i = 0; i < expression.length; i++){
      if (expression[i] === "(" || expression[i] === "{" || expression[i] === "["){
        stack.push(expression[i])
      } else {
        if (expression[i] === ")" && stack[stack.length-1] === "("){
          stack.pop()
        } else if (expression[i] === "}" && stack[stack.length -1] === "{") {
          stack.pop()
        } else if (expression[i] === "]" && stack[stack.length -1] === "[") {
          stack.pop()
        } else {
          result = "NO"
          break;
        }
      }
    }
    if (stack.length > 0){
      result = "NO"
    }
    console.log(result)
}

//with hashTable

function balancedBrackets(expression) {
  var table = {
    "[": "]",
    "{": "}",
    "(": ")",
    "()": "()",
    "{}": "{}",
    "[]": "[]"
  }
  var stack = [];
  for(i = 0; i < expression.length; i++){
    if(table[expression[i]]){
      stack.push(expression[i])
      } else {
        if (table[stack[stack.length-1] + expression[i]]){
        stack.pop();
      } else {
        return "No"
      }
    }
  }
  if (stack.length){
    return "No"
  } else {
    return "Yes"
  }
}


function isBalanced(expression){
  let stack = [];
  for (i = 0; i < expression.length; i++){
    if (expression[i] === "(" || expression[i] === "{" || expression[i] === "["){
      stack.push(expression[i])
      } else {
        if (expression[i] === ")" && stack[stack.length-1] === "("){
          stack.pop()
        } else if (expression[i] === "}" && stack[stack.length -1] === "{") {
          stack.pop()
        } else if (expression[i] === "]" && stack[stack.length -1] === "[") {
          stack.pop()
        } else {
          return "NO"
        }
      }
    }
    if (stack.length > 0){
      return "NO"
    }
    return "YES"
}
