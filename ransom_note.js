function createHash(arr){
  let obj = new Object;
  for (i = 0; i < arr.length; i++){
    if (obj.hasOwnProperty(arr[i])){
      obj[arr[i]]++
    } else {
      obj[arr[i]] = 1
    }
  }
  return obj
}

function ransomNote(magazine, note){
  let magHash = createHash(magazine);
  let noteHash = createHash(note);
  var result = 'Yes'
    for (word in noteHash){
      if (noteHash[word] > magHash[word] || magHash[word] === undefined){
        result = 'No'
        break;
      }
    }
    console.log(result)
}

ransomNote("two times three is not four", "two times two is four")
