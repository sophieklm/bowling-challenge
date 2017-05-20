$( document ).ready(function() {
   var game = new Game();

   $('#reset').on('click', function(){
     game = new Game();
     $('#scoresheet td').html('');
     $('#game-over').text('');
     $('#banter').text('');
   });

   $('#bowl').on('click', function(){
     if (game.gameOver()) {
       gameOver();
     }
     pins = game.randomNumber();
     bowlnum = game.eachscore.length;
     game.bowl(pins);
     updateScore(game.getCurrentScore(), bowlnum);
     throwBanter();
   });

   function updateScore(score, bowlnum) {
     $('#scoresheet td').eq(bowlnum).html(pins);
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
