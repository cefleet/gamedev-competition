Teddy.Levels.Level1 = function(){

//Teddy.Level.call(this,
//this.Level = new Teddy.Level(game,'Level1',
Teddy.Level.call(this,game,'Level1',
{
	map :{
		name : 'level1', 
		tiles : {
			image : 'testTiles',
			tilesetName : 'testTiles', 
			setWorld : true,
			layers : [
				{
					name : 'boundries',
					angledCollisions : {
						2:Phaser.Plugin.Adventurer.AdvTilemap.ANGLEMAP.FORTYFIVE,						
						3: Phaser.Plugin.Adventurer.AdvTilemap.ANGLEMAP.ONETHIRTYFIVE,						
					},
					collisions : [4]
				}
			]
		}		
	},
	player : {
			items : null,
			location : [300,800],
			key: 'teddy',
			frame: null
	},
	triggers : {
			
	},
	npcs : [
		{
			name : 'gardener',
			x : 2000,
			y:800,
			key : 'person',
			speed : 70,
			patrol : [[2200,800],[2500,900], [2600,700], [2400,600],[2200,650],[2000,800]]
		},
		{
			name : 'dog',
			x: 900,
			y: 600,
			key:'dog',
			speed : 800,
			patrol : null
		}
	],
	sprites: [
		{
			name : 'treeBottom',
			x:150,
			y:1450, 
			key :'treebottom'
		},
		{
			name :'treeTop',
			x:150,
			y:680,
			key:'treetop'
		},
		{
			name : 'doghouse',
			x:480,
			y:480,
			key:'doghouse'
		}
	]
})
};

Teddy.Levels.Level1.prototype = Object.create(Teddy.Level.prototype);
Teddy.Levels.Level1.prototype.constructor = Teddy.Levels.Level1;

//Initilizes them Level
Teddy.Levels.Level1.prototype._init = function(){
	//this is just teaking the items added
	console.log("Don't Worry it was");
	this.game.adv.player.bringToTop();
	
	this.sprites.treeTop.bringToTop();
	//shoud have an autoadd for this
	game.add.advDBox(10,10,'dbpg');
	
	//Gardener stuff
	this.npcs.gardener.startPatrol();
	this.npcs.gardener.vision.width = 300,
	this.npcs.gardener.vision.height = 400;
	this.npcs.gardener.addWhenSeePlayerAction(function(){
		this.game.adv.dialogueBox.show('Yeah I see ya there. \n What do you want me to do about it???');
	});
	
	//Dog stuff
	this.sprites.doghouse.anchor.setTo(0.5,0.5);
	this.npcs.dog.leash = 500;
	this.npcs.dog.house = this.sprites.doghouse;
	this.npcs.dog.checkConstraint = function(){
		
		if(Phaser.Math.distance(this.x,this.y,this.house.x,this.house.y) > this.leash){
			var angle = Phaser.Math.angleBetween(this.house.x,this.house.y,this.x,this.y)
			var y = this.house.y+this.leash*Math.sin(angle);
			var x = this.house.x+this.leash*Math.cos(angle);
			this.x = x;
			this.y = y;
		}
	}
	this.npcs.dog._update = this.npcs.dog.update;
	this.npcs.dog.update = function(){
		this._update();
		game.physics.arcade.moveToObject(this, this.game.adv.player, this.speed);
		this.checkConstraint();
	}
	
}
