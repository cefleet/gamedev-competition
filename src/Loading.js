var Loading = function(){};
Loading.prototype = {
	preload : function(){
		/*
			Initiate the Preload
			this.preloadBar = game.add.sprite(180, 300, 'preload');
			game.load.setPreloadSprite(this.preloadBar, 0);
		*/
		
		game.load.tilemap('level1', 'assets/level1z.json', null, Phaser.Tilemap.TILED_JSON); // loading the tilemap 
		game.load.image('testTiles', 'assets/testTiles_green1.png'); // loading the tileset image
		game.load.image('testTiles2', 'assets/testTiles_green1.png'); // loading the tileset image
		game.load.spritesheet('teddy','assets/teddy9.png',80,80);
		game.load.image('treetop', 'assets/treetop1.png');
		game.load.image('treebottom', 'assets/treebottom1.png');
		game.load.spritesheet('person', 'assets/person7.png',200,267);
		game.load.image('dog', 'assets/dog1.png');
		game.load.image('doghouse','assets/doghouse2.png');
		game.load.image('dumptruck','assets/dumptruck1.png');
		game.load.spritesheet('swing','assets/swing2.png',190,350);
		game.load.spritesheet('trimmers', 'assets/trimmers1.png',70,111);
		game.load.spritesheet('dirt','assets/dirt1.png',120,60);//120,60
		game.load.image('bone', 'assets/bone3.png');
		game.load.image('shovel','assets/shovel2.png');
		game.load.image('sandbox', 'assets/sandbox.png');
		game.load.image('garden', 'assets/garden1.png');
		game.load.image('house','assets/house3.png');
		game.load.image('branch','assets/branch.png');
		game.load.image('rock','assets/rock.png');
		game.load.image('rockpile','assets/rockpile1.png');
		game.load.image('workbench','assets/workbench2.png');
		game.load.image('screwdriver','assets/screwdriver.png');
		game.load.image('crack', 'assets/crack.png');
		
		game.plugins.add(new Phaser.Plugin.Adventurer(game));
            
		
	},
	create : function(){
	
		game.state.add('Home', Main);
		game.state.add('Game', Game);
	
		
		game.state.start('Home', true);
	}
}
