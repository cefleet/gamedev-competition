Teddy.Level = function(game,name,options){
	this.game = game;
	this.name = name;
	this.options = options; // these are saved until needed
	this.sprites = {};
	this.npcs = {};
	this.items = {};
	this.triggers = {};
	
};

Teddy.Level.prototype.constructor = Teddy.Level;

Teddy.Level.prototype = {
	load : function(){
		//make sure the other level is unloaded and the state is restarted
		var m = this.options.map;
		this.map = this.game.add.advTilemap(m.name, m.tiles);
		
		//player
		var p = this.options.player;
		this.game.adv.addPlayer(p.location[0],p.location[1],p.key,p.frame);
		
		//sprites
		for(var i = 0; i < this.options.sprites.length; i++){
			var s = this.options.sprites[i];
			//need to re-figure out patrol			
			this.sprites[s.name] = this.game.add.sprite(s.x,s.y,s.key,s.frame);
		}
		
		//npcs
		for(var i = 0; i < this.options.npcs.length; i++){
			var n = this.options.npcs[i];
			//need to re-figure out patrol			
			this.npcs[n.name] = this.game.add.advNPC(n.x,n.y,n.key,null,n.name,n.speed,n.patrol);
		}
		
		//items
		for(var i = 0; i < this.options.items.length; i++){
			var it = this.options.items[i];
			//need to re-figure out patrol			
			//game.add.advItem(110, 850, 'player');
			this.items[it.name] = this.game.add.advItem(it.x,it.y,it.key, it.frame, it.name);
		}
		
		//triggers
		for(var i = 0; i < this.options.triggers.length; i++){
			var t = this.options.triggers[i];
			//need to re-figure out patrol			
			this.triggers[t.name] = this.game.add.advTrigger(t.x,t.y,t.key,t.frame);
		}
		
		this._init();
	},
	
	_init : function(){
		console.log('You really should have overwritten this');
	}
};
