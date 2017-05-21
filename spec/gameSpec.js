//var Game = require('../src/game')

describe('Game', function () {
  var game //= require('../src/game.js');

  beforeEach(function () {
    game = new Game();
  });

  describe('standard rules', function () {
    it('starts with a score of 0', function () {
      expect(game.getScore()).toEqual(0);
    });

    it('starts with 10 pins', function () {
      expect(game.getPins()).toEqual(10);
    });

    it('reduces the number of pins when a bowl is taken', function () {
      game.bowl(5);
      expect(game.getPins()).toEqual(5);
    });

    it('increases the score when a bowl is taken', function () {
      game.bowl(5);
      expect(game.getScore()).toEqual(5);
    });

    it('knows which frame it is in', function () {
      expect(game.getFrame()).toEqual(1);
    });

    it('knows how many bowls have been played', function () {
      expect(game.getBowl()).toEqual(1);
    });

    it('has two bowls per frame', function () {
      game.bowl(1);
      expect(game.getBowl()).toEqual(2);
    });

    it('increments the frame after two bowls', function () {
      game.bowl(1);
      game.bowl(1);
      expect(game.getFrame()).toEqual(2);
    });

    it('resets the pins after two bowls', function () {
      game.bowl(1);
      game.bowl(1);
      expect(game.getPins()).toEqual(10);
    });

    it('can only have ten frames', function () {
      for(var i = 0; i < 20; i++) {
        game.bowl(1);
      }
      expect(game.gameOver()).toBe(true);
    });

  });

  describe('strikes', function() {
    it('knows 10 pins is a strike', function (){
      game.bowl(10);
      expect(game.isStrike()).toBe(true);
    });

    it('incrememnts frame after strike', function () {
      game.bowl(10);
      expect(game.getFrame()).toEqual(2);
      expect(game.eachscore[0]).toEqual(10);
    });

    it('adds score from current frame to total score if previous was strike', function(){
      game.bowl(10);
      game.bowl(5);
      game.bowl(3);
      expect(game.framescore[0]).toEqual(18);
      expect(game.getScore()).toEqual(26);
    });

    it('does stuff to double strikes', function(){
      game.bowl(10);
      game.bowl(10);
      game.bowl(3);
      expect(game.framescore[0]).toEqual(23);
      expect(game.getScore()).toEqual(36);
    });
  });

  describe('spares', function() {
    it('knows a total of 10 is a spare if not a strike', function (){
      game.bowl(3);
      game.bowl(7);
      expect(game.isSpare()).toBe(true);
    });

    it('adds score from current frame to total score if previous was strike', function(){
      game.bowl(3);
      game.bowl(7);
      game.bowl(5);
      expect(game.framescore[0]).toEqual(15);
      expect(game.getScore()).toEqual(20);
    });
  });

  describe('last frame', function () {

  });

  describe('gutter game', function () {
    it('can be a gutter game', function() {
      for(var i = 0; i < 20; i++) {
        game.bowl(0);
      }
      expect(game.getScore()).toEqual(0);
    });
  });

});
