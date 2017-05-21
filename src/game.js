function Game() {
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

Game.prototype.bowl = function (pins) {
  this.setCurrentScore(pins);
  if (this.gameOver()) {
    this.setCurrentScore(0);
  } else {
    this.eachscore.push(this.getCurrentScore());
    if (this.isStrike()) {
    this.framescore.push(this.getCurrentScore());
    this.eachscore.push(0);
    this.incrementFrame(1);
  } else if (this.isSpare()) {
    this.eachscore.push(0);
    this.incrementFrame(1);
  } else if (this.getBowl() === 1) {
    this.framescore.push(this.getCurrentScore());
    this.setPins(pins);
    this.changeBowl(2);
  } else if (this.getBowl() === 2) {
    this.secondBowlScoring(this.getFrame());
  }};
  this.calculateScore();
};

Game.prototype.calculateScore = function () {
  this.score = this.framescore.reduce((x, y) => x + y);
};

Game.prototype.secondBowlScoring = function (index) {
  this.framescore[index-1] += this.getCurrentScore();
  this.checkStrike();
  this.setCurrentScore(0);
  this.incrementFrame(1);
  this.resetPins();
  this.changeBowl(1);
};

Game.prototype.finalStrikeBonus = function(index) {
  this.framescore.push(0);
  this.framescore[index] += this.getCurrentScore();
};

Game.prototype.checkStrike = function(){
  if (this.wasStrike()) {
    this.strikeBonus(this.getFrame());
  }
};

Game.prototype.strikeBonus = function(index){
  this.framescore[index-2] += this.framescore[index-1];
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
  return this.framebowl === 1 && this.getCurrentScore() === 10 ;
};

Game.prototype.isSpare = function () {
  return this.framebowl === 2 && this.getCurrentScore() === 10 ;
};

Game.prototype.wasStrike = function () {
  return this.eachscore[this.eachscore.length-4] === 10 ;
};


Game.prototype.gameOver = function () {
  return this.getFrame() > this.MAX_FRAMES;
};

Game.prototype.randomNumber = function() {
  return Math.floor(Math.random() * (this.getPins() + 1));
};


//module.exports = Game;
