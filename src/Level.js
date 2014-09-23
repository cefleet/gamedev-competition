Teddy.Level = function(game,name,options){
	this.game = game;
	this.name = name;
	this.options = options; // these are saved until needed
	this.sprites = {};
	this.npcs = {};
	
};

Teddy.Level.prototype.constructor = Teddy.Level;

Teddy.Level.prototype = {
	load : function(){
		//make sure the other level is unloaded and the state is restarted
		var m = this.options.map;
		this.map = this.game.add.advTilemap(m.name, m.tiles);
		var p = this.options.player;
		this.game.adv.addPlayer(p.location[0],p.location[1],p.key,p.frame);
		
		for(var i = 0; i < this.options.sprites.length; i++){
			var s = this.options.sprites[i];
			//need to re-figure out patrol			
			this.sprites[s.name] = this.game.add.sprite(s.x,s.y,s.key,s.frame);
		}
		
		for(var i = 0; i < this.options.npcs.length; i++){
			var n = this.options.npcs[i];
			//need to re-figure out patrol			
			this.npcs[n.name] = this.game.add.advNPC(n.x,n.y,n.key,null,n.name,n.speed,n.patrol);
		}
		this._init();
	},
	
	_init : function(){
		console.log('You really should have overwritten this');
	}
};
