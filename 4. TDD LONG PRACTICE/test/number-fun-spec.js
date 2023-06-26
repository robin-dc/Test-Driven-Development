// Your code here
const expect = require("chai").expect
const {returnsThree, reciprocal} = require("../problems/number-fun")

describe("returnsThree", function(){
    it("should return 3", function(){
        const result = returnsThree()
        expect(result).to.equal(3)
    })
})
describe("reciprocalNum", function(){
    it("should return the reciprocal number", function(){
        const result = reciprocal(4)

        expect(result).to.equal(0.25)
        expect(() => {
            reciprocal(0)
            reciprocal(1100000)
        }).to.throw(TypeError,"n must be between 1 and 1000000")
    })
})
