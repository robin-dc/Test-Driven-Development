// Your code here
const chai = require('chai');
const expect = chai.expect
const Person = require('../problems/person')

const spies = require("chai-spies")
chai.use(spies)

describe("Person", function(){
    let person1;

    beforeEach(()=>{
        person1 = new Person("robin", 19)
        person1.sayHello.bind(person1)
        person1.visit.bind(person1)
        person1.switchVisit.bind(person1)
        person1.update.bind(person1)
        person1.tryUpdate.bind(person1)
    })

    describe("Constructor", function(){
        it("should have property name", function(){
            expect(person1.name).to.exist
        })
        it("should have property age", function(){
            expect(person1.age).to.exist
        })
    })
    describe("sayHello Instance Method", function(){
        it("should return a string of Person instance's name and a greeting message", function(){
            const result = person1.sayHello()
            expect(result).to.be.equal(`Hello ${person1.name}`)
        })
    })
    describe("visit Instance Method", function(){
        it("should return a string stating that this instance visited the passed-in person instance", function(){
            const result = person1.visit("haerin")
            expect(result).to.be.equal(`${person1.name} visited haerin`)
        })
    })
    describe("switchVisit Instance Method", function(){
        it("should invoke the visit function of the parameter (otherPerson), passing in the current instance as the argument", function() {
            const otherPerson = {
                visit: chai.spy()
            };

            person1.switchVisit(otherPerson);

            expect(otherPerson.visit).to.have.been.called.with(person1);
        })
    })
    describe("update Instance Method", function(){
        it("should throw a new TypeError with a clear message if the incoming argument is not an object", function() {
            expect(() => {
                person1.update("foo")
            }).to.throw(TypeError)
        })
        it("should update the instance's properties to match the passed-in object's values", function() {
            const newObject = { name: "lulu", age: 57 }
            const result = person1.update(newObject)

            expect(result).to.deep.equal(newObject)
        })
        it("should throw a TypeError with an appropriate message if the incoming object does not have a name and an age property", function() {
            const badObject = { gender: "male", grade: 90}

            expect(() => {
                person1.update(badObject)
            }).to.throw(TypeError, "No name or age property on the passed object")
        })
    })
    describe("tryUpdate Instance Method", function(){
        it("should return true if update is successfully invoked  (it does not throw an error), indicating the update was successful (make sure that the instance was updated as well)", function() {
            const newObject = { name: "lulu", age: 57 }
            const result = person1.tryUpdate(newObject)
            expect(result).to.be.true
            expect(person1).to.deep.equal(newObject)
        })
        it("should not throw an error, instead it should return false if update is not successfully invoked", function() {
            const badObject = { gender: "male", grade: 90}
            const result = person1.tryUpdate(badObject)

            expect(result).to.be.false
            expect(() => {
                person1.tryUpdate(badObject)
            }).to.not.throw()
        })
    })

    describe("greetAll Static Method", function(){
        it("should call the sayHello() method on each Person instance and store each returned string in an array, before finally returning an array of the stored strings.", function() {
            const person2 = new Person("haerin", 17)
            const result = Person.greetAll([person1, person2])

            expect(result).to.deep.equal(["Hello robin", "Hello haerin"])
        })
    })
})
