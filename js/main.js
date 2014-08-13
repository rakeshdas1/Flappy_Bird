//Initialize Phaser Engine, create a 400x490px game

var game = new Phaser.game(400, 490, Phaser.AUTO, 'gameDiv');

//Create the main state that contains the game
//This is the body of the game itself
//It should contain all code related to the game itself

var mainState = {
  preload: function(){
    //this function willl execute at the beginning
    //Which is where we'lll load our assets for the game
    //Set the BG color of the game 
    
    game.stage.backgroundColor = "#71c5cf";
    
  },
  
  create: function(){
    //This function is called right after preload function 
    //This is where we set up the game assets from earlier
  },
  update: function () {
  //This function runs 60 times per second
},
  
  
  
}




//Add and start the 'mainState' to start the game
game.state.add('main', mainState);
game.state.start('main');







