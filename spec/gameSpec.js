describe('Game', function () {
  var game;

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
      expect(function () { game.bowl(1) }).toThrowError('Game Over!');
    });

    it('incrememnts frame after strike', function () {
      game.bowl(10);
      expect(game.getFrame()).toEqual(2);
    });
  });

  describe('last frame', function () {

  });
});
