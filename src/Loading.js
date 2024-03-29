var Loading = function(){};
Loading.prototype = {
	preload : function(){
		
		//Initiate the Preload
		this.preloadBG = game.add.sprite(0,0,'loadingBG');
		
		this.preloadBar = game.add.sprite(100, 380, 'preload');
		game.load.setPreloadSprite(this.preloadBar, 0);		
		
		game.load.audio('introMusic','assets/DeserveToBeLoved.ogg');
		game.load.audio('gameMusic','assets/Surreptitious.mp3');
		game.load.audio('cutsceneMusic','assets/Faith.ogg');
		
		game.load.audio('dig', 'assets/dig.ogg');
		game.load.audio('glass','assets/glass.ogg');
		game.load.audio('snip','assets/snip.ogg');
		game.load.audio('whack','assets/whack.ogg');
		game.load.audio('wood','assets/wood.ogg');		
		
		game.load.image('intro', 'assets/introImage.png');
		game.load.spritesheet('blink','assets/blink1.png', 106,68);		
		
		game.load.image('end1','assets/end1.png');
		game.load.image('end2','assets/end2.png');
		game.load.image('end3','assets/end3.png');
		game.load.image('end4','assets/end4.png');
		
		game.load.image('title', 'assets/TitleScreen1.png');
		game.load.tilemap('level1', 'assets/level1ab.json', null, Phaser.Tilemap.TILED_JSON); // loading the tilemap 
		game.load.image('testTiles', 'assets/testTiles_green2.png'); // loading the tileset image
		game.load.image('testTiles2', 'assets/testTiles_green2.png'); // loading the tileset image
		game.load.spritesheet('teddy','assets/teddy9.png',80,80);
		game.load.image('treetop', 'assets/treetop1.png');
		game.load.image('treebottom', 'assets/treebottom1.png');
		game.load.spritesheet('person', 'assets/person7.png',200,267);
		game.load.image('dog', 'assets/dog1.png');
		game.load.image('doghouse','assets/doghouse2.png');
		game.load.image('dumptruck','assets/dumptruck1.png');
		game.load.spritesheet('swing','assets/swing2.png',190,350);
		game.load.spritesheet('trimmers', 'assets/trimmers3.png',43,68);
		game.load.spritesheet('dirt','assets/dirt1.png',120,60);//120,60
		game.load.image('bone', 'assets/bone3.png');
		game.load.image('shovel','assets/shovel3.png');
		game.load.image('sandbox', 'assets/sandbox.png');
		game.load.image('garden', 'assets/garden1.png');
		game.load.image('house','assets/house3.png');
		game.load.image('branch','assets/branch.png');
		game.load.image('rock','assets/rock.png');
		game.load.image('rockpile','assets/rockpile1.png');
		game.load.image('workbench','assets/workbench2.png');
		game.load.image('screwdriver','assets/screwdriver.png');
		game.load.image('crack', 'assets/crack.png');
		game.load.image('dialogueBox', 'assets/dialogBox1.png');
		game.load.image('vision', 'assets/vision1.png');
		game.load.spritesheet('catdoor','assets/catdoor1.png',100,82);
		game.load.image('rope', 'assets/rope.png');
		game.load.image('nessy','assets/nessy1.png');
		
		game.load.image('greybg', 'assets/greybg.png');
		game.load.image('menu', 'assets/menu.png');
		game.plugins.add(new Phaser.Plugin.Adventurer(game));
            
		
	},
	create : function(){
	
		game.state.add('Home', Main);
		game.state.add('Game', Game);
		game.state.add('Ending',End);
	
		
		game.state.start('Home', true);
	}
}
