var str = "hello there good sir"

function reverse(str, result = []){
  if (typeof(str) === "string"){
    str = str.split(" ");
  }
  if (str.length == 0){
    result.push(str[0])
  } else {
    result.unshift(str.shift())
    return reverse(str, result)
  }
  result = result.join(" ")
  return result
}

reverse(str)

//reverse string

function reverse(str){
  if (str.length === 1){
    return str
  }
  return str.slice(-1) + reverse(str.slice(0,-1))
}

// reverse sentence

function reverseSentence(sentence) {
  if (typeof(sentence) !== "object"){
     sentence = sentence.split(" ");
  }
  if (sentence.length === 1){
    return sentence
  }
  return sentence.pop() + " " + reverseSentence(sentence)
};


function findMax(array) {
  if (array.length === 1) {
    return array;
  };
  if (array[0] < array[1]) {
    return findMax(array.slice(1))
  } else {
    return findMax(array.slice(0,1).concat(array.slice(2)))
  }
}
