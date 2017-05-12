'use strict';

function Game(){
  this.START_SCORE = 0;
  this.score = this.START_SCORE;
}

Game.prototype.getScore = function() {
  return this.score;
};

Game.prototype.setScore = function(score) {
  return this.score = score;
};
