function reverseString(string) {
  // Your code here
  let newStr = ""
  if(typeof string !== "string"){
    throw new TypeError("Invalid String")
  }
  for(let i = string.length-1; i >= 0; i--){
    newStr += string[i]
  }
  return newStr
};


module.exports = reverseString
