$( document ).ready(function() {
   var game = new Game();

   $('#reset').on('click', function(){
     game = new Game();
     $('#scoresheet td').html('');
     $('#game-over').text('');
     $('#banter').text('');
   });

   $('#bowl').on('click', function(){
     pins = game.randomNumber();
     bowlnum = game.eachscore.length;
     frame = game.getFrame();
     if (game.gameOver()) {
       gameOver();
       updateTotal(game.getScore(), frame);
     }
     game.bowl(pins);
     updateScore(game.getCurrentScore(), bowlnum);
     updateTotal(game.getScore(), frame);
     throwBanter();
   });

   function updateScore(score, bowlnum) {
     $('#scoresheet tr:nth-child(1) td').eq(bowlnum).html(pins);
   };

   function updateTotal(score, frame) {
     $('#scoresheet tr:nth-child(2) td').eq(frame-1).html(score);
   };

   function gameOver(){
     $('#game-over').text("Game Over!");
   };

   function throwBanter() {
     var array = ["Great roll!", "Ooh that was close!", "You're terrible at this!", "I dream of bowling like you"];
     var randomIndex = Math.floor(Math.random() * array.length);
     $('#banter').text(array[randomIndex]);
   };

});
