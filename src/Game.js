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
		game.time.advancedTiming = true;
	
	},
	
	
	update : function(){			
		 //  this.world.sort('y', Phaser.Group.SORT_ASCENDING);

	},
	render : function(){
		game.debug.text('FPS : '+game.time.fps, 10,10);
		//game.debug.body(game.adv.player);
	}
}
