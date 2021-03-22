class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref("playerCount").once("value");
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();

        player.getCount();
      }
     
      form = new Form()
      form.display();
    }
  }
play(){
form.hide()
text("ready?   Go!",120,100);
Player.getPlayerInformation();
if(allPlayers!== undefined){
  var displayPosition= 130;

  for(var plr in allPlayers){
if (plr==="player"+player.index)
  fill(rgb (13,172,167))
  
  else
    fill("red")

  
  
displayPosition = displayPosition+30;
textSize(50);
text(allPlayers[plr].name +"-"+allPlayers[plr].distance,120,displayPosition);
}

}
if(keyIsDown(DOWN_ARROW)&& player.index!==null){
  player.distance = player.distance+=50;
  player.update();
}
}
}