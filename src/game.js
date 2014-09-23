//Set Width / Height
var Teddy = {
	Levels : {}
};
var game = new Phaser.Game(960,640, Phaser.CANVAS,'', {
	create:create,
	preload:preload
});

function preload(){
	//Preload Images
	game.LevelManager = new Teddy.LevelManager(game);
}

function create(){
	
	//add loading BG sprite
	game.state.add('Loading', Loading);
	game.state.start('Loading', true);	
}
