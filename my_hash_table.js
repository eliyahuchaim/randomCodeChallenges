// function hash(string, max){
//   let hash = 0;
//     for (i = 0; i < string.length; i++){
//       hash+= string.charCodeAt(i)
//     }
//     return hash % max
// }


function HashTable(hashLimit){
  let storage = [];
  this.limit = hashLimit;

  this.printStorage = function(){
    console.log(storage)
  }

  this.createHash = function(string){
    let hash = 0;
    for (i = 0; i < string.length; i++){
      hash += string.charCodeAt(i)
    }
    return hash % this.limit
  }

  this.add = (key, value) => {
    var index = this.createHash(key)
    if (storage[index] === undefined){
      storage[index] = [[key, value]];
    } else {
      var inserted = false;
      for (i = 0; i < storage[index].length; i++){
        if(storage[index][i][0] === key){
          storage[index][i][1] = value;
          inserted = true
        }
      }
      if (inserted === false){
        storage[index].push([key,value])
      }
    }
  }


  this.lookUp = function(key){
    var index = this.createHash(key);
    if (storage[index] === undefined){
      return undefined
    } else {
      for (i = 0; i < storage[index].length; i++){
        if (storage[index][i][0] === key){
          return storage[index][i][1]
        }
      }
    }
  }


} // end of class


var ht = new HashTable(14)

ht.add("dog", "fido")
ht.lookUp("dog")
ht.add("person", "eli")
ht.lookUp("person")
