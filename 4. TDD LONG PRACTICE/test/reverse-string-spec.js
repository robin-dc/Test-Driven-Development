// Your code here
const expect = require('chai').expect
const reverseString = require("../problems/reverse-string")

describe("revereString", function(){
    it("should reverse a string", function(){
        const result = reverseString("fun")
        expect(result).to.equal("nuf")
    })
    it("should throw TypeError", function(){
        const result2 = () => reverseString(2);

        expect(result2).to.throw(TypeError, "Invalid String")
    })
})
