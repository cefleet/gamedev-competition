var Loading = function(){};
Loading.prototype = {
	preload : function(){
		/*
			Initiate the Preload
			this.preloadBar = game.add.sprite(180, 300, 'preload');
			game.load.setPreloadSprite(this.preloadBar, 0);
		*/
		
		game.load.tilemap('level1', 'assets/level1o.json', null, Phaser.Tilemap.TILED_JSON); // loading the tilemap 
		game.load.image('testTiles', 'assets/testTiles.png'); // loading the tileset image
		game.load.image('teddy','assets/teddy2.png');
		game.load.image('treetop', 'assets/treetop1.png');
		game.load.image('treebottom', 'assets/treebottom1.png');
		game.load.image('person', 'assets/person1.png');
		game.load.image('dog', 'assets/dog.png');
		game.load.image('doghouse','assets/doghouse.jpg');

		
		game.plugins.add(new Phaser.Plugin.Adventurer(game));
            
		
	},
	create : function(){
	
		game.state.add('Home', Main);
		game.state.add('Game', Game);
	
		
		game.state.start('Home', true);
	}
}
