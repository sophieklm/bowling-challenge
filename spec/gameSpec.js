'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('standard rules', function(){
    it('starts with a score of 0', function(){
      expect(game.getScore()).toEqual(0);
    });

    it('starts with 10 pins', function(){
      expect(game.getPins()).toEqual(10);
    });

    it('reduces the number of pins when a bowl is taken', function(){
      game.bowl(5);
      expect(game.getPins()).toEqual(5);
    });

    it('increases the score when a bowl is taken', function(){
      game.bowl(5);
      expect(game.getScore()).toEqual(5);
    });

  });
  
});
