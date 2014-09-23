var Main = function(){};
Main.prototype = {
	create : function(){
		
		//TODO for now it just jumps right to the game but this will be the start screeen 
		
		game.state.start('Game',true);
		
	}
}
