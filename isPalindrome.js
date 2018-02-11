
function isPalindrome(str){
  if (str[0] === str[str.length -1]){
    if(str.length > 2){
      return isPalindrome(str.slice(1, str.length -1))
    } else {
      return true
    }
  }
  return false
}
