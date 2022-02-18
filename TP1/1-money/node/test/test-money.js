const chai = require("chai");
const expect = chai.expect;
const should = require("chai").should();
const assert = chai.assert;
const Money = require("../src/money.js");


describe("Money", function () {
  describe("#add()", function () {
    it("should correctly add two moneys with the same currency", function () {
      let m1 = new Money(10.0, "EUR"),
        m2 = new Money(20.0, "EUR");

      m1.add(m2); // On additionne m2 à m1. m1 est modifié

      let newAmount = m1.amount, // On récupère la valeur
        oracle = 30.0; // On souhaite comparer par rapport à la valeur théorique

      assert.equal(newAmount, oracle,
        `m1 vaut ${newAmount}€ alors qu'il devrait valoir ${oracle}€`);
    });

    it("should correctly add two moneys with different currencies", function () {
      let m1 = new Money(10.0, "EUR"),
        m2 = new Money(20.0, "USD");

      m1.add(m2); // On additionne m2 à m1. m1 est modifié

      let newAmount = m1.amount, // On récupère la valeur
        oracle = 20.0; // On souhaite comparer par rapport à la valeur théorique

      expect(newAmount).to.equal(oracle);
    });

    it("should throw an exception when the currency is neither EUR nor USD", function () {
      let m1 = new Money(10.0, "EUR"),
        m2 = new Money(20.0, "BZR"); // BZR : Réal brésilien

      (function () { m1.add(m2); }).should.throw(); // On capture l'exception

    });
  });
});
