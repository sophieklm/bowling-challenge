'use strict';

function Game(){
  this.START_SCORE = 0;
  this.START_PINS = 10;
  this.score = this.START_SCORE;
  this.pins = this.START_PINS;
  this.frame = 1;
  this.framebowl = 1;
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

Game.prototype.setPins = function(pins){
  return this.pins -= pins;
};

Game.prototype.resetPins = function(){
  this.pins = this.START_PINS;
};

Game.prototype.getFrame = function(){
  return this.frame;
};

Game.prototype.incrementFrame = function(set){
  this.frame += set;
};

Game.prototype.getBowl = function(){
  return this.framebowl;
};

Game.prototype.changeBowl = function(set){
  this.framebowl = set;
};

Game.prototype.bowl = function(pins) {
  if(this.getBowl() === 1){
    this.setPins(pins);
    this.changeBowl(2);
  }
  else if(this.getBowl() === 2){
    this.incrementFrame(1);
    this.resetPins();
    this.changeBowl(1);
  }
  this.setScore(pins);  
};
