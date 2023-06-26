function myMap(inputArray, callback) {
  // Your code here
  if(!Array.isArray(inputArray)){
    throw new TypeError("expected an array")
  }
  let newArray = []
  inputArray.forEach((item) => {
    newArray.push(callback(item))
  })
  return newArray
  // return inputArray.map((item) => callback(item))
}

module.exports = myMap;
