var Game = function(){};
Game.prototype = {
	preload : function(){
		
		this.started = false;
	},
	
	create : function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.Level = 'Level1';
		game.adv.activeLevel = new Teddy.Levels[this.Level]();
		game.adv.activeLevel.load();		
	
	},
	
	
	update : function(){
			
	
	}
}
