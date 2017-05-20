$( document ).ready(function() {
   var game = new Game();

   $('#reset').on('click', function(){
     game = new Game();
     $('#scoresheet td').html('');
     $('#game-over').text('');
   });

   $('#bowl').on('click', function(){
     if (game.gameOver()) {
       gameOver();
     }
     pins = randomNumber();
     bowlnum = game.eachscore.length;
     game.bowl(pins);
     updateScore(game.getCurrentScore(), bowlnum);
   });

   function randomNumber() {
     return Math.floor(Math.random() * 10) + 1;
   };


   function updateScore(score, bowlnum) {
     $('#scoresheet td').eq(bowlnum).html(pins);
   };

   function gameOver(){
     $('#game-over').text("Game Over!");
   }

});
