function softWrap(str, lineLength) {
  var results = [];
  var str = str.split(" ");
  var sum = 0;
  var arr = [];

  while (str.length) {
    var current = str[0];
    sum += current.length + 1;
    if (sum <= lineLength) {
      arr.push(str.shift() + " ");
    } else {
      results.push(arr.join(""));
      sum = 0;
      arr = [];
    };
  };
  if (arr.length) {
    results.push(arr.join(""))
  };
  return results.join('\n').trim()
};

const string =  "it was a really nice day when i saw all the people outside doing their thing such coool people out there you know";

softWrap(string, 10);
