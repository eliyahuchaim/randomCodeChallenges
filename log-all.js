var arr = [ 'a' ,
 'b' ,
 ['c','d', ['e','f'] ] ,
 'g' ,
 ];

 function logAllWithRecursion(array) {
   for (var i = 0; i < array.length; i++) {
     if (typeof array[i] !== 'object') {
       console.log(array[i]);
     } else {
       logAllWithRecursion(array[i])
     }
   }
 }


 function logAllWithRecursion(array, a = []) {
   for (var i = 0; i < array.length; i++) {
     if (typeof array[i] !== 'object') {
       a.push(array[i])
     } else {
       logAllWithRecursion(array[i], a)
     }
   }
   return a;
 }



 function addAllWithRecursion(array) {
   let arr = [];
   for (var i = 0; i < array.length; i++) {
     if (typeof array[i] !== 'object') {
       arr.push(array.slice(i, i + 1)[0])
     } else {
       return arr.concat(addAllWithRecursion(array.slice(i)))
     }
   }
   return arr.concat(array)
 }

 addAllWithRecursion([ 'a' ,
  'b' ,
  ['c','d', ['e','f'] ] ,
  'g' ,
  ])



 var arr = [ 'a' ,
  'b' ,
  ['c','d', ['e','f'] ] ,
  'g' ,
  ];

 function addAll(array) {
   if (typeof array[0] !== 'object' && array.length < 2) {
     return [array.shift()]
   };
   if (typeof array[0] === 'object') {
     return addAll(array[0]).concat(array)
   } else {
     return [array.shift()].concat(addAll(array))
   }
 }

 addAll([ 'a' ,
  'b' ,
  ['c','d', ['e','f'] ] ,
  'g' ,
  ])


  function pal(str) {
    if (str[0] === str[str.length - 1]) {
      if (str.length <= 2) {
        return true
      } else {
        return pal(str.substring(1, str.length -1))
      }
    }
    return false
  }
