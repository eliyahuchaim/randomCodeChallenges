function hash(str) {
  str = str.split("")
  let hash = new Object;
  for (i = 0; i < str.length; i++){
    if (hash.hasOwnProperty(str[i])){
      hash[str[i]]++
    } else {
      hash[str[i]] = 1
    }
  }
  return hash
}

function findNonRepeating(str){
  let table = hash(str);
    for (letter in table){
      if (table[letter] === 1){
        return letter
      }
    }
}



function firstRepeatingLetter(str) {
  str = str.split("");
  let table = new Object;

  for (var i = 0; i < str.length; i++){
    if (table[str[i]]){
      return str[i]
    } else {
      table[str[i]] = 1
    }
  }
  return "No Repeating Letters"
}
