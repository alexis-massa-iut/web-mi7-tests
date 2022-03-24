const assert = require('assert');
const Chessboard = require('../src/chessboard');
const game = require('../games/2022-03-07-game.json');
const Color = require('../src/color');

/**
 * From a file number, get the corresponding letter.
 * Rank are 1-indexed.
 * Letters are 97-indexed to get lower-alpha characters.
 * @param {number} file - the file in its number representation.
 * @return {string} returns the file in its string representation.
 */
const convertFileToString = function (file) {
  return String.fromCharCode(97 - 1 + file);
};

describe('Game', function () {
  let chessboard;

  before(function () {
    chessboard = new Chessboard();
    chessboard.init();
  });

  describe('#move and #capture', function () {
    game.forEach((action) => {
      if (action.type === 'move') {
        it(`Sould be able to move from [${action.from.rank}, ${action.from.file} to ${action.to.rank}, ${action.to.file}]`, function () {
          const pawn = chessboard.getPiece(action.from.rank, action.from.file);
          assert.equal(pawn.color, action.color); // is good color
          assert.equal(pawn.canMove(action.to.rank, action.to.file), true); // can mode

          pawn.move(action.to.rank, action.to.file); // move

          assert.equal(pawn.rank, action.to.rank) // Check new position
          assert.equal(pawn.file, action.to.file) // Check new position
        });
      } else { // action = capture
        it(`Should be able to capture [${action.at.rank}, ${action.at.file}`, function () {
          const pawn = chessboard.getPiece(action.at.rank, action.at.file);
          assert.notEqual(pawn.color, action.color);
        });
      }
    });
  });
});
