const assert = require("assert");
const levenshtein = require("../src/levenshtein.js");

describe("#levenshtein()", function () {
  it("La distance de levenshtein entre 'niche' et 'chiens' est de 5", function () {
    assert.equal(levenshtein("niche", "chiens").distance, 5);
  });

  it("La distance de levenshtein entre 'chiens' et 'niche' est de 5", function () {
    assert.equal(levenshtein("chiens", "niche").distance, 5);
  });

  it("La distance entre deux chaines identiques est de 0", function () {
    assert.equal(levenshtein("test", "test").distance, 0);
  });

  it("La distance entre une chaine vide et un chaine non vide est de 0", function () {
    assert.equal(levenshtein("", "test").distance, 4);
  });

  it("La distance entre des entrées invalides doit rentre une exception", function () {
    assert.throws(() => { levenshtein(30, "test").distance });
  });

});
