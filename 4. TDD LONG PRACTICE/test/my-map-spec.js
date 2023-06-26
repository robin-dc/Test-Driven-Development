// Your code here
const chai = require("chai")
const expect = chai.expect
const myMap = require("../problems/my-map")

const chaiSpies = require("chai-spies");
chai.use(chaiSpies);

describe("myMap", function(){
    let array;
    let callback;

    beforeEach(()=>{
        array = [1,2,3,4]
        callback = (e) => e*2
    })

    afterEach(() => {
        chai.spy.restore(Array.prototype, "map");
    });

    it("should invoke the callback once for each element in the array", function() {
        const spyCallback = chai.spy();
        myMap(array, spyCallback);
        expect(spyCallback).to.have.been.called.exactly(array.length);
    });

    it("should not used the original array method", function(){
        const originalMap = Array.prototype.map;
        const mapSpy = chai.spy()

        const result = myMap(array, callback);

        expect(result).to.deep.equal([2, 4, 6, 8]);
        expect(mapSpy).to.not.have.been.called();
        Array.prototype.map = originalMap;
    })
    it("should accept an array as an argument", function(){
        expect(() => {
            myMap("not an array", callback)
        }).to.throw(TypeError, "expected an array")
    })

    it("should return new array", function(){
        const result = myMap(array, callback)
        const comparison = result !== array
        expect(comparison).to.be.true
    })

    it("should return same length as the length of the argument passed in", function(){
        const oldArray = array.length
        const modifiedArray = myMap(array, callback).length
        const comparison = oldArray === modifiedArray
        expect(comparison).to.be.true
    })
})
