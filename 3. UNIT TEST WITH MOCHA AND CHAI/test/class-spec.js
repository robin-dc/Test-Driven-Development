const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word1;

  beforeEach(() => {
    word1 = new Word("racecar");
    word1.removeVowels.bind(word1)
    word1.removeConsonants.bind(word1)
    word1.pigLatin.bind(word1)
  })

  describe("Word constructor function", function () {

    it('should have a "word" property', function () {
      expect(word1.word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word1.word).to.equal("racecar")
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const result = word1.removeVowels()

      expect(result).to.eql("rccr");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const result = word1.removeConsonants();

      expect(result).to.eql("aea")
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const result = word1.pigLatin()
      expect(result).to.eql("acecarray")
    });
  });
});
