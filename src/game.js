'use strict';

function Game(){
  this.START_SCORE = 0;
  this.START_PINS = 10;
  this.score = this.START_SCORE;
  this.pins = this.START_PINS;
}

Game.prototype.getScore = function() {
  return this.score;
};

Game.prototype.setScore = function(pins) {
  this.score += pins;
};

Game.prototype.getPins = function() {
  return this.pins;
};

Game.prototype.bowl = function(pins) {
  this.setScore(pins);  
  return this.pins -= pins;
};

