var Game = function () {
  this.START_PINS = 10;
  this.MAX_FRAMES = 10;
  this.currentscore = 0;
  this.score = 0;
  this.pins = this.START_PINS;
  this.frame = 1;
  this.framebowl = 1;
  this.eachscore = [];
  this.framescore = [];
};

Game.prototype.getScore = function () {
  return this.score;
};

Game.prototype.setScore = function (pins) {
  this.score += pins;
};

Game.prototype.getCurrentScore = function () {
  return this.currentscore;
};

Game.prototype.setCurrentScore = function (pins) {
  this.currentscore = pins;
};

Game.prototype.getPins = function () {
  return this.pins;
};

Game.prototype.setPins = function (pins) {
  this.pins -= pins;
};

Game.prototype.resetPins = function () {
  this.pins = this.START_PINS;
};

Game.prototype.getFrame = function () {
  return this.frame;
};

Game.prototype.incrementFrame = function (set) {
  this.frame += set;
};

Game.prototype.getBowl = function () {
  return this.framebowl;
};

Game.prototype.changeBowl = function (set) {
  this.framebowl = set;
};

Game.prototype.isStrike = function () {
  return this.getCurrentScore() === 10 ;
};

Game.prototype.wasStrike = function () {
  return this.eachscore[this.eachscore.length-2] === 10 ;
};

Game.prototype.bowl = function (pins) {
  if (this.gameOver()) {
    throw new Error('Game Over!');
  }
  this.setCurrentScore(pins);
  if (this.wasStrike()) {

  } if (this.isStrike()) {
    this.eachscore.push(0);
    this.incrementFrame(1);
  } else if (this.getBowl() === 1) {
    this.setCurrentScore(pins);
    this.setPins(pins);
    this.changeBowl(2);
  } else if (this.getBowl() === 2) {
    this.setCurrentScore(0);
    this.incrementFrame(1);
    this.resetPins();
    this.changeBowl(1);
  }
  this.setScore(pins);
  this.eachscore.push(this.getCurrentScore());
};

  Game.prototype.gameOver = function () {
    return this.getFrame() > this.MAX_FRAMES;
  };

  Game.prototype.randomNumber = function() {
    return Math.floor(Math.random() * (this.getPins() + 1));
  };


//module.exports = new Game();
