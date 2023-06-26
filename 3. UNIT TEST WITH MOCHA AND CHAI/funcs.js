// complete those functions according to the specs found in test/funcs-spec.js.
function isFive(num) {
  // Your code here
  return num === 5
}

function isOdd(number) {
  // Your code here
  if(isNaN(number)) throw new Error
  return number % 2 !== 0
}

function myRange(min, max, step=1) {
  // Your code here
  const result = []
  if(min >= max || step >= max){
    return result
  }else{
    for(let i = min; i <= max; i+=step) {
      result.push(i)
    }
    return result
  }
}


module.exports = { isFive, isOdd, myRange };
