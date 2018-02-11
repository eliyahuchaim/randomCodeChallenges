var a = "aretheyhere";
var b = "yestheyarehere";
var result = "aehrsty";

function longest(s1,s2) {
  const table = {};
  let str = "";
  s1.split("").concat(s2.split("")).sort().forEach(el => {
    if (!table[el]) {
      str+=el;
      table[el] = el;
    };
  });
  return str;
}
