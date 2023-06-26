function myRange(min, max, step=1) {
    // Your code here
    const result = []
    if(min >= max || step >= max){
      return result
    }else{
      for(let i = min; i < max; i+=step) {
        result.push(i)
      }
      return result
    }
  }

  const [min1, max1] = [0, 5];
  const [min2, max2] = [6, 3];

  const actual1 = myRange(min1, max1);
//   const expected1 = [0, 1, 2, 3, 4, 5];
  const actual2 = myRange(min2, max2);
//   const expected2 = [];
console.log(actual1)
console.log(actual2)
