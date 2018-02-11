var array1 = [1,2,3,4];

function cloneArray(array) {
  const clonedArray = array.slice(0);
  clonedArray.push(5,6,7);
  console.log("this is original array:", array);
  console.log("this is cloned array:", clonedArray);
};

//monkey patching

Array.protoype.clone = function() {
  return this.slice(0);
};



var obj = {'hi': 'there'};

var testObj = obj;

testObj.hi = 'boo';

obj.hi



var obj = {2: 'second obj'}

var mainObj = {ob: obj}

var testObj = mainObj;



function cloneArrayWithObjects(array) {
  const clonedArray = [];
  
}
