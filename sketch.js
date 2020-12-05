var gameState=0
var database,form,player,game;
var playerCount

function setup(){
    database=firebase.database()
    createCanvas(400,400);
game=new Game()
game.getState()
game.start()

}

function draw(){
   
}

