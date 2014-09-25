Teddy.Levels.Level1 = function(){

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
				},
				{
					name : 'fenceandhouse',
					altTileset : 'testTiles2',
					altImg : 'testTiles2'
				}				
			]
		}		
	},
	player : {
			items : null,
			location : [2540,1632],
			key: 'teddy',
			frame: null
	},
	triggers : [
		{
			name : 'swing',
			x:1020,
			y : 1420,
			key : 'swing',
			frame:0
		},
		{
			name : 'sandboxTrap',
			x : 1200,
			y : 1390,
			key : ''
		},
		{
			name : 'catdoorTrap',
			x : 2155,
			y : 250,
			key : ''
		},
		{
			name : 'dirt',
			x : 2721,
			y: 1254,
			key : 'dirt',
			frame :0
		},
		{
			name : 'dirtDecoy1',
			x : 1405,
			y:715,
			key : 'dirt',
			frame :0
		},
		{
			name : 'dirtDecoy2',
			x : 1692,
			y:1064,
			key : 'dirt',
			frame :0
		},
		{
			name : 'dirtDecoy3',
			x : 2108,
			y:1623,
			key : 'dirt',
			frame :0
		}	
	],
	items : [
		{
			name : 'trimmers',
			x : 2739,
			y: 1018,
			frame : null,
			key : 'trimmers'
		},
		{
			name : 'bone',
			x : 2723,
			y: 1254,
			frame : null,
			key : 'bone'
		},
		{
			name : 'shovel',
			x : 1200,
			y : 1400,
			key : 'shovel'
		},
		{
			name : 'branch',
			x : 365,
			y : 1600,
			key : 'branch'
		},
		{
			name : 'rock',
			x : 1936,
			y : 1030,
			key : 'rock'
		},
		{
			name : 'screwdriver',
			x: 800,
			y : 140,
			key : 'screwdriver'
		}		
	],
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
		},
		{
			name : 'dumptruck',
			x : 1864,
			y:1380,
			key : 'dumptruck'
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
		},
		{
			name : 'sandbox',
			x : 1200,
			y : 1390,
			key:'sandbox'
		},
		{
			name : 'garden1',
			x : 1900,
			y:640,
			key : 'garden'
		},
		{
			name : 'garden1',
			x : 2180,
			y:640,
			key : 'garden'
		},
		{
			name : 'garden2',
			x : 2500,
			y:640,
			key : 'garden'
		},
		{
			name : 'house',
			x : 960,
			y:0,
			key : 'house'
		},
		{
			name:'rockpile',
			x : 1840,
			y : 740,
			key : 'rockpile'
		},
		{
			name : 'workbench',
			x : 840,
			y : 92,
			key : 'workbench'
		},
		{
			name : 'crack',
			x: 1200,
			y : 140,
			key : 'crack'
		
		}
	]
})
};

Teddy.Levels.Level1.prototype = Object.create(Teddy.Level.prototype);
Teddy.Levels.Level1.prototype.constructor = Teddy.Levels.Level1;

//Initilizes them Level
Teddy.Levels.Level1.prototype._init = function(){
	//this is just teaking the items added
	this.triggers.dirt.bringToTop();

	this.game.adv.player.bringToTop();

	this.sprites.sandbox.anchor.setTo(0.5,0.5);
	
	this.triggers.swing.bringToTop();
	this.sprites.treeTop.bringToTop();
	//shoud have an autoadd for this
	game.add.advDBox(10,10,'dbpg');
	
	this._initPlayer();
	this._initDog();
	this._initBone();
	this._initGardner();
	this._initDumptruck();
	this._initSwing();
	this._initSandboxTrap();
	this._initCatdoorTrap();
	this._initDirt();
	var decoys = [this.triggers.dirtDecoy1,this.triggers.dirtDecoy2,this.triggers.dirtDecoy3];
	for(var i = 0; i < decoys.length; i++){
		this._initDecoy(decoys[i]);
	}
}

Teddy.Levels.Level1.prototype._initCatdoorTrap = function(d){
	var cd = this.triggers.catdoorTrap;
	cd.height = 300;
	cd.width = 300;
	cd.body.imovable = true;
	cd.body.moves = false;
	
	cd._update = cd.update;
	cd.update = function(){
		game.physics.arcade.collide( this.game.adv.player, this);
	}
},

Teddy.Levels.Level1.prototype._initDecoy = function(d){
	d.touchInteraction = true;
	d.addAction(function(){
		if(this.game.adv.player.item){
			if(this.game.adv.player.item.name === 'shovel'){
				this.frame = 1;
				this.dugUp = true;
			}
		} else {
			if(!this.dugUp){
				this.game.adv.dialogueBox.show('Stupid dog burring stuff in the dirt');
			}
		}
	});
}

Teddy.Levels.Level1.prototype._initDirt = function(){
	var dirt = 	this.triggers.dirt;
	dirt.touchInteraction = true;
	dirt.addAction(function(){
		if(this.game.adv.player.item){
			if(this.game.adv.player.item.name === 'shovel'){
				this.frame = 1;
				this.game.adv.activeLevel.items.bone.uncovered = true;
				this.game.adv.activeLevel.items.bone.bringToTop();
				this.dugUp = true;
			}
		} else {
			if(!this.dugUp){
				this.game.adv.dialogueBox.show('Stupid dog burring stuff in the dirt');
			}
		}
	});
}

Teddy.Levels.Level1.prototype._initBone = function(){
	var bone = this.items.bone;
	bone._update = bone.update;
	bone.update = function(){
		if(this.uncovered) {
			this._update();
		}
	}
}

Teddy.Levels.Level1.prototype._initSwing = function(){
	var swing = this.triggers.swing;
	swing.touchInteraction = true;
	swing.interactDistance = 200;
	
	swing.addAction(function(){
		if(this.game.adv.player.item){
			if(this.game.adv.player.item.name === 'trimmers'){
				if(!this.cutDown){
					this.game.adv.activeLevel.triggers.sandboxTrap.destroy();
					this.frame = 1;
					this.game.adv.player.bringToTop();
					this.game.adv.activeLevel.sprites.treeTop.bringToTop();
				}
				this.cutDown = true;
			}
		} else {
			if(!this.cutDown){
				this.game.adv.dialogueBox.show('The left rope looks a little frayed');
			} 
		}
	});
}

Teddy.Levels.Level1.prototype._initSandboxTrap = function(){
	var sb = this.triggers.sandboxTrap;
	sb.height = 300;
	sb.width = 300;
	sb.body.imovable = true;
	sb.body.moves = false;
	
	sb._update = sb.update;
	sb.update = function(){
		game.physics.arcade.collide( this.game.adv.player, this);
	}
}

//Player stuff
Teddy.Levels.Level1.prototype._initPlayer = function(){
	this.game.adv.player.caught = false;
	this.game.adv.player._update = this.game.adv.player.update;
	this.game.adv.player.body.setSize(78,28,2,20);
	
	//LEFT
	this.game.adv.player.animations.add('moveleft',[7,8,7,6], 6);
	this.game.adv.player.animations.add('moveleftItem',[10,11,10,9], 6);

	//RIGHT
	this.game.adv.player.animations.add('moveright',[1,2,1,0], 6);
	this.game.adv.player.animations.add('moverightItem',[4,5,4,3], 6);
	
	//UP
	this.game.adv.player.animations.add('moveup',[19,20,19,18], 6);
	this.game.adv.player.animations.add('moveupItem',[22,23,22,21], 6);
	
	//DOWN
	this.game.adv.player.animations.add('movedown',[13,14,13,12], 6);
	this.game.adv.player.animations.add('movedownItem',[16,17,16,15], 6);
	
	this.game.adv.player.update = function(){
		this._update();
		if(this.caught){
			this.game.state.start('Game',true);
		}
		//this.animations.play('stopped');
		this.stopAnim = true;
		for(var g in this.going){
			if(this.going[g]){
				if(g === 'left' || g === 'right'){
					this.body.setSize(52,28,4,20);
				} else {
					this.body.setSize(78,28,2,20);
				}
				this.stopAnim = false;
				if(this.item){
					this.animations.play('move'+g+'Item');
					break;
				} else {
					this.animations.play('move'+g);
					break;
				}
			}
		}
		if(this.stopAnim){
			this.animations.stop();
		}
	}	
}

//Dog stuff
Teddy.Levels.Level1.prototype._initDog = function(){
	//doghouse and leash stuff
	this.sprites.doghouse.anchor.setTo(0.5,0.5);
	this.npcs.dog.leash = 500;
	this.npcs.dog.house = this.sprites.doghouse;	
	
	//This keeps the dog on a leash
	this.npcs.dog.checkConstraint = function(){
		
		if(Phaser.Math.distance(this.x,this.y,this.house.x,this.house.y) > this.leash){
			var angle = Phaser.Math.angleBetween(this.house.x,this.house.y,this.x,this.y)
			var y = this.house.y+this.leash*Math.sin(angle);
			var x = this.house.x+this.leash*Math.cos(angle);
			this.x = x;
			this.y = y;
		}
	}
	
	//modifies the update 
	this.npcs.dog._update = this.npcs.dog.update;
	this.npcs.dog.update = function(){
		this._update();
		if(!this.hasBone){
			var dist =game.physics.arcade.distanceBetween(this, this.game.adv.activeLevel.items.bone);
			if(dist < 600){
				game.physics.arcade.moveToObject(this, this.game.adv.activeLevel.items.bone, this.speed);
				console.log('Give me the bone, give me the bone');
				if(dist < 60){
					this.hasBone = true;
				}
			} else {
				game.physics.arcade.moveToObject(this, this.game.adv.player, this.speed);
				this.rotation = game.physics.arcade.angleToXY(this, this.game.adv.player.x,this.game.adv.player.y);
			}
				this.checkConstraint();
		
		} else {
			
			if(game.physics.arcade.distanceBetween(this, this.house) > 60){
				game.physics.arcade.moveToObject(this, this.house, 90);
				this.rotation = game.physics.arcade.angleToXY(this, this.house.x,this.house.y);
				this.game.adv.activeLevel.items.bone.x = this.x;
				this.game.adv.activeLevel.items.bone.y = this.y;
			} else {
				this.body.velocity.y = 0;
				this.body.velocity.x = 0;
			}
			
		}
	}
	
	//intraction variables
	this.npcs.dog.addInteraction(function(){
		this.game.adv.dialogueBox.show("I've Got you now...and your pretty little face too");
		this.game.adv.player.caught = true;
	});
	this.npcs.dog.touchInteraction = true;
}

//Gardner stuff
Teddy.Levels.Level1.prototype._initGardner = function(){
	this.npcs.gardener.frame = 1;
	this.npcs.gardener.animations.add('walk',[1,2,1,0],3, true);
	this.npcs.gardener.animations.play('walk');
	this.npcs.gardener.startPatrol();
	//this.npcs.gardener.vision.width = 300,
	//this.npcs.gardener.vision.height = 400;
	this.npcs.gardener.addWhenSeePlayerAction(function(){
		this.game.adv.dialogueBox.show('Yeah I see ya there. \n What do you want me to do about it???');
		this.game.adv.player.caught = true;
	});
}

Teddy.Levels.Level1.prototype._initDumptruck = function(){
	var dt = this.npcs.dumptruck;
	dt.hadConvo = false;
	dt.interactDistance = 120;
	dt.addInteraction(function(){
		//pauseplayer movment on this one
	
		this.game.adv.dialogueBox.show('How in the world are you doing that?');
		
	});
}
