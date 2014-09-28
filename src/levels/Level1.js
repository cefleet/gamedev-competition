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
		},
		{
			name : 'windowTrigger',
			x : 1270,
			y : 480,
			key :''
		},
		{
			name : 'workbenchTrigger',
			x : 860,
			y : 300,
			key:''
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
			x: 900,
			y : 240,
			key : 'screwdriver'
		}		
	],
	npcs : [
		{
			name : 'gardener',
			x : 2080,
			y:930,
			key : 'person',
			speed : 70,
			patrol : [[2500,930],[2700,930], [2700,560],[2360,560],[2360,930],[2080,930]]
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
			x : 2300,
			y:1670,
			key : 'dumptruck'
		},
		{
			name : 'nessy',
			x : 190,
			y : 1650,
			key : 'nessy'
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
			y:560,
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
		},
		{
			name : 'catdoor',
			x:2107,
			y : 310,
			key : 'catdoor'
		}
	]
})
};

Teddy.Levels.Level1.prototype = Object.create(Teddy.Level.prototype);
Teddy.Levels.Level1.prototype.constructor = Teddy.Levels.Level1;

//Initilizes them Level
Teddy.Levels.Level1.prototype._init = function(){
	this.game.adv.openDialogue = false;
	this.music = game.add.audio('gameMusic',1,true);
	this.music.play('',0,.8,true);
		    
	//this is just teaking the items added
	this.triggers.dirt.bringToTop();

	this.game.adv.player.bringToTop();

	this.sprites.sandbox.anchor.setTo(0.5,0.5);
	
	this.triggers.swing.bringToTop();
	this.sprites.treeTop.bringToTop();
	//shoud have an autoadd for this
	game.add.advDBox(10,10,'dialogueBox');
	
	this._initPlayer();
	this._initDog();
	this._initBone();
	this._initGardner();
	this._initDumptruck();
	this._initNessy();
	this._initSwing();
	this._initSandboxTrap();
	this._initCatdoorTrap();
	this._initDirt();
	this._initRock();
	this._initWindowTrigger();
	this._initWorkbenchTrigger();
	this._initTrimmers();
	this._initShovel();
	this._initBranch();
	this._initScrewdriver();
	
	var decoys = [this.triggers.dirtDecoy1,this.triggers.dirtDecoy2,this.triggers.dirtDecoy3];
	for(var i = 0; i < decoys.length; i++){
		this._initDecoy(decoys[i]);
	}
	
	//this.game.adv.dialogueBox.show('');
	//pause movement for a bit
	var t = "Esc - Menu and Controls";
	this.guideText = game.add.text(750, 600, t, {
        font: "16px Arial",
        fill: "#4343C9",
        align :'left'
    });
        
    this.guideText.fixedToCamera = true;
    
}

Teddy.Levels.Level1.prototype._initScrewdriver = function(){
	
	var sd = this.items.screwdriver;
	
	sd.held.left.position[1] = -20;	
	
	sd.held.right.position[1] = -20;	
	sd.held.right.rotation = 0;
	
	sd.held.down.rotation = 0;
	sd.held.down.position[1] = -10;	
	
	sd.held.up.rotation = 0;
	sd.held.up.position[1] = -40;	

}


Teddy.Levels.Level1.prototype._initBranch = function(){
	
	var branch = this.items.branch;
	branch.held.left.position[0]= -20;
	branch.held.left.position[1] = -20;	
	branch.held.left.rotation = 90;
	
	branch.held.right.position[0] = 24;
	branch.held.right.position[1] = -20;	
	branch.held.right.rotation = 90;
	
	branch.held.down.rotation = 90;
	branch.held.down.position[1] = -24;
	branch.held.down.position[0] = 0;
	
	branch.held.up.rotation = 90;
	branch.held.up.position[1] = -40;	
	
}

Teddy.Levels.Level1.prototype._initShovel = function(){
	
	var shovel = this.items.shovel;
	shovel.held.left.position[0]= -20;
	shovel.held.right.position[0] = 26;
	shovel.held.right.rotation = 180;
	shovel.held.down.rotation = 240;
	shovel.held.down.position[1] = 24;
	shovel.held.down.position[0] = 10;
	shovel.held.up.rotation = 60;
	shovel.held.up.position[1] = -20;	
	
}

Teddy.Levels.Level1.prototype._initTrimmers = function(){
	
	var trimmers = this.items.trimmers;
	trimmers.held.left.position[0]= -20;
	trimmers.held.left.position[1] = -12;
	trimmers.held.right.position[0] = 26;
	trimmers.held.right.position[1] = -12;
	trimmers.held.right.rotation = 0;
	trimmers.held.down.rotation = 0;
	trimmers.held.down.position[1] = 2;
	trimmers.held.up.rotation = 0;
	trimmers.held.up.position[1] = -20;

	
	trimmers.animations.add('cut', [1,0,1,0,1,0],8);
	trimmers._update = trimmers.update;
	
}

Teddy.Levels.Level1.prototype._initRock = function(d){
	var rock = this.items.rock;	
	
	rock.thrownToWindow = function(){
		
		var t = game.add.tween(this);
		t.to({x :1250, y  : 160}, 500);
		t.onComplete.add(function(){
			game.add.audio('glass').play();
			this.game.adv.activeLevel.items.rock.x= -500;
			this.game.adv.activeLevel.sprites.crack.x = this.game.adv.activeLevel.sprites.crack.oldx;
			this.game.adv.activeLevel.sprites.crack.y = this.game.adv.activeLevel.sprites.crack.oldy;
			this.game.adv.activeLevel.npcs.gardener.hasClippers = false; // drops them.
			this.game.adv.dialogueBox.show("What was that noise? \nI'd better go inside and check it out!");
			this.game.adv.activeLevel.npcs.gardener.vision.destroy();
			this.game.adv.activeLevel.npcs.gardener.destroy();
		});
		
		t.start();		
	}
}

Teddy.Levels.Level1.prototype._initWorkbenchTrigger = function(){
	var wbt = this.triggers.workbenchTrigger;
	wbt.width = 150;
	wbt.height = 160;
	//wbt.touchInteraction = true; 
	wbt.interactDistance = 120;
	wbt.addAction(function(){
		if(this.game.adv.player.item){
			if(this.game.adv.player.item.name === 'branch'){
				game.add.audio('whack').play();
				//TODO animations
				this.game.adv.activeLevel.items.screwdriver.x -= 100;
				this.game.adv.activeLevel.items.screwdriver.y += 20;
				//TODO kill the trigger
				this.x = -360;
			}
		} else {
			this.game.adv.dialogueBox.show("Look the screwdriver is up there. \n I just need something to knock it down...");
		}
	});
}

Teddy.Levels.Level1.prototype._initWindowTrigger = function(){
	var wt = this.triggers.windowTrigger;
	
	//crack is gone until the rock is thrown
	this.sprites.crack.oldx  = this.sprites.crack.x;
	this.sprites.crack.oldy = this.sprites.crack.y;	
	this.sprites.crack.x = -300;
	this.sprites.crack.y = -300;	
	wt.cracked = false;
	wt.width = 220;
	wt.height = 100;
	//wt.touchInteraction = true;
	wt.addAction(function(){
		if(this.game.adv.player.item){
			if(this.game.adv.player.item.name === 'rock'){
				
				this.game.adv.player.item.thrownToWindow();
				//this.cracked = true; //apply this to the window
				
				//tween rock then make dissapear
				this.game.adv.player.item = null;
				
			
			}
		} else {
			if(!this.cracked){
				this.game.adv.dialogueBox.show('Hmmm. ');
			}
		}
	});
	
}

Teddy.Levels.Level1.prototype._initCatdoorTrap = function(d){
	rcd = this.sprites.catdoor;
	rcd.animations.add('open',[0,1,2,3], 14);
	var cd = this.triggers.catdoorTrap;
	cd.height = 300;
	cd.width = 100;
	cd.body.imovable = true;
	cd.body.moves = false;
	cd.interactDistance = 180;
	//cd.touchInteraction = true;
	
	cd._update = cd.update;
	cd.update = function(){
		cd._update();
		game.physics.arcade.collide( this.game.adv.player, this);
	}
	
	cd.addAction(function(){
		if(this.game.adv.player.item){
			if(this.game.adv.player.item.name === 'screwdriver'){
				this.x = -500;
				this.y = - 300; 
				this.game.adv.activeLevel.sprites.catdoor.animations.play('open');
				this.game.adv.player.cannotMove = true;
				
				var fadeOut = function(){
					this.spr_bg = this.game.add.graphics(0, 0);
					this.spr_bg.fixedToCamera = true;
					this.spr_bg.beginFill('#000000', 1);
					this.spr_bg.drawRect(0, 0, this.game.width, this.game.height);
					this.spr_bg.alpha = 0;
					this.spr_bg.endFill();

					this.s = this.game.add.tween(this.spr_bg);
					this.s.to({ alpha: 1 }, 1200, null);
					this.s.onComplete.add(function(){
						this.game.adv.activeLevel.music.stop();
						//TODO goto ending sequence
						game.state.start('Ending',true);
					}, this);
					this.s.start();					
					game.add.tween(this.game.adv.activeLevel.music).to({volume:0}, 1200).start();
				};
				fadeOut();
				
			} else {
				this.game.adv.dialogueBox.show('Well... this '+this.game.adv.player.item.name+' does nothing here');
			}
		} else {
			this.game.adv.dialogueBox.show('The catdoor is stuck! ');
			this.game.adv.activeLevel.npcs.dumptruck.onConversation = 'second';
		}
	});
}

Teddy.Levels.Level1.prototype._initDecoy = function(d){
	//d.touchInteraction = true;
	d.addAction(function(){
		if(this.game.adv.player.item){
			if(this.game.adv.player.item.name === 'shovel'){
				game.add.audio('dig').play();
				this.frame = 1;
				this.dugUp = true;
			}
		} else {
			if(!this.dugUp){
				this.game.adv.dialogueBox.show('Hmph. The stupid dog has been digging.\n I wonder if he buried something.\nI should look for a way to dig!');
			}
		}
	});
}

Teddy.Levels.Level1.prototype._initDirt = function(){
	var dirt = this.triggers.dirt;
	dirt.addAction(function(){
		if(this.game.adv.player.item){
			if(this.game.adv.player.item.name === 'shovel' && !this.dugUp){
				game.add.audio('dig').play();
				this.frame = 1;
				this.game.adv.activeLevel.items.bone.uncovered = true;
				this.game.adv.activeLevel.items.bone.bringToTop();
				this.dugUp = true;
				this.game.adv.activeLevel.items.bone.x += 80;
			}
		} else {
			if(!this.dugUp){
				this.game.adv.dialogueBox.show('Hmph. The stupid dog has been digging.\n I wonder if he buried something.\nI should look for a way to dig!');
			}
		}
	});
}

Teddy.Levels.Level1.prototype._initBone = function(){
	var bone = this.items.bone;
	bone.held.left.rotation = 90;
	bone.held.right.rotation = 90;
	bone.held.right.position[0] += 12;
	bone.held.up.position[1] -= 8;
	bone.held.down.position[1] -= 8;
	bone._update = bone.update;
	bone.update = function(){
		if(this.uncovered) {
			this._update();
		}
	}
}

Teddy.Levels.Level1.prototype._initSwing = function(){
	var swing = this.triggers.swing;
	//swing.touchInteraction = true;
	swing.interactDistance = 200;
	
	swing.addAction(function(){
		if(this.game.adv.player.item){
			if(this.game.adv.player.item.name === 'trimmers'){
				if(!this.cutDown){
					var cut = this.game.adv.activeLevel.items.trimmers.animations._anims.cut;
					game.add.audio('snip').play();
					cut.onComplete.add(function(){
						this.game.adv.activeLevel.triggers.sandboxTrap.destroy();
						this.frame = 1;
						this.game.adv.player.bringToTop();
						this.game.adv.activeLevel.sprites.treeTop.bringToTop();
						game.add.audio('wood').play();
					},this);
					cut.play();					
				}
				this.cutDown = true;
			}
		} else {
			if(!this.cutDown){
				this.game.adv.dialogueBox.show('The left rope looks a little frayed.');
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
	var player = this.game.adv.player;
	
	player.speed = 160;
	player.caught = false;
	player._update = this.game.adv.player.update;
	player.body.setSize(78,28,2,20);
	
	//LEFT
	player.animations.add('moveleft',[7,8,7,6], 6);
	player.animations.add('moveleftItem',[10,11,10,9], 6);

	//RIGHT
	player.animations.add('moveright',[1,2,1,0], 6);
	player.animations.add('moverightItem',[4,5,4,3], 6);
	
	//UP
	player.animations.add('moveup',[19,20,19,18], 6);
	player.animations.add('moveupItem',[22,23,22,21], 6);
	
	//DOWN
	player.animations.add('movedown',[13,14,13,12], 6);
	player.animations.add('movedownItem',[16,17,16,15], 6);
	
	player.update = function(){
		if(!this.cannotMove){
		this._update();
		if(this.caught){
			//music.stop
			this.caught = false;
			this.cannotMove = true;
			this.game.adv.activeLevel.music.stop();
			this.spr_bg = this.game.add.graphics(0, 0);
			this.spr_bg.beginFill('#000000', 1);
			this.spr_bg.drawRect(0, 0, this.game.width, this.game.height);
			this.spr_bg.alpha = 0;
			this.spr_bg.endFill();
			this.spr_bg.fixedToCamera = true;
			game.world.bringToTop(this.spr_bg);
			this.s = this.game.add.tween(this.spr_bg);
			this.s.to({ alpha: 1 }, 5000, null);
			this.s.onComplete.add(function(){
				this.game.adv.activeLevel.music.stop();
				this.cannotMove = false;
				game.state.start('Game',true);
			}, this);
			game.time.events.add(4, function(){
				this.s.start();
			}, this);			
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
		
		//super hackish
		this.game.adv.activeLevel.sprites.treeTop.bringToTop();
		if(this.game.adv.openDialogue){
			this.game.adv.dialogueBox.sprite.bringToTop();
			game.world.bringToTop(this.game.adv.dialogueBox.text);
		}
		
	} else {
		this.body.velocity.x = 0;
		this.body.velocity.y = 0;
	}
	}	
}

//Dog stuff
Teddy.Levels.Level1.prototype._initDog = function(){
	var ropeLengths = Math.ceil(500/17)+1;
	this.npcs.dog.rope = [];
	for(var i = 0; i < ropeLengths; i++){
			this.npcs.dog.rope[i] = game.add.sprite(-18,-18, 'rope');
			this.npcs.dog.rope[i].anchor.setTo(1,0.5);
	}
	this.npcs.dog.moveRope = function(){
	
		var angle = Phaser.Math.angleBetweenPoints(this.house, this) + game.math.degToRad(180);		
		this.rope[this.rope.length-1].x = this.x;
		this.rope[this.rope.length-1].y = this.y;
		
		this.rope[this.rope.length-1].rotation = angle;
		
		
		if(!game.physics.arcade.distanceBetween(this, this.house) < 450){
			this.rope[this.rope.length-1].y = this.y+((this.house.y -this.y)/4)+34;
		}
		
		for(var i = this.rope.length-2; i > 0; i--){	
			if(game.physics.arcade.distanceBetween(this, this.house) < 450){
				angle = Phaser.Math.angleBetweenPoints(this.house,this.rope[i+1])+game.math.degToRad(180)-game.math.degToRad(game.physics.arcade.distanceBetween(this.house, this.rope[i+1])/i);
			}
			
			this.rope[i].rotation = angle;
			this.rope[i].y = Math.sin(angle)*17+this.rope[i+1].y;
			this.rope[i].x = Math.cos(angle)*17+this.rope[i+1].x;
		}
	},
	
	//doghouse and leash stuff
	this.sprites.doghouse.anchor.setTo(0.5,1);
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
	this.npcs.dog.mumble = game.add.text(60,60,'',{
		font: "22px Arial",
		fill: "#424242"
	});
	this.npcs.dog.mumble.fixedToCamera = true;

	//modifies the update 
	this.npcs.dog._update = this.npcs.dog.update;
	this.npcs.dog.update = function(){
		this._update();
		this.moveRope();
		var distToPlayer =game.physics.arcade.distanceBetween(this, this.game.adv.player);
		var distToBone =game.physics.arcade.distanceBetween(this, this.game.adv.activeLevel.items.bone);
		
		if(!this.hasBone){
			game.physics.arcade.moveToObject(this, this.game.adv.player, this.speed);
			this.rotation = game.physics.arcade.angleToXY(this, this.game.adv.player.x,this.game.adv.player.y);
			this.checkConstraint();
		}
		if(distToBone < 540 && !this.hasBone){
			game.physics.arcade.moveToObject(this, this.game.adv.activeLevel.items.bone, this.speed);
				this.mumble.setText(' Bark Bark! Rough!\n(Give me the bone, I want the bone.) \nBark Bark \n(Bone, Bone, Bone!)\nBark Bark, Bark \n(Please, Please, Please...)');
			} else if(distToPlayer < 540 && !this.hasBone){
			this.mumble.setText('"Grrrr..Rough! Grrrrr... \n(You shouldn\'t be walking! )\n Grrr Bark! Bark! ...\n (I\'m going to eat you!)"');
		} else if(this.mumble){

			this.mumble.setText('');
		}
				
		if(this.hasBone){
			
			if(game.physics.arcade.distanceBetween(this, this.house) > 60){
				game.physics.arcade.moveToObject(this, this.house, 130);
				this.rotation = game.physics.arcade.angleToXY(this, this.house.x,this.house.y);
				this.game.adv.activeLevel.items.bone.x = this.x- 60;
				this.game.adv.activeLevel.items.bone.y = this.y;
			} else {
				this.body.velocity.y = 0;
				this.body.velocity.x = 0;
			}			
		}
	}
	
	//intraction variables
	this.npcs.dog.addInteraction(function(){
		if(!this.game.adv.player.item && !this.hasBone){
			this.game.adv.dialogueBox.show("GRRRRRRr... GrwolllGRRR \n(I've Got you now...and \nyour pretty little face too)");
			this.game.adv.player.caught = true;
		} else if (!this.hasBone  && this.game.adv.player.item.name !== 'bone'){
			this.game.adv.dialogueBox.show("GRRRRRRr... GrwolllGRRR \n(I've Got you now...and \nyour pretty little face too)");
			this.game.adv.player.caught = true;
		} else if (this.hasBone  || this.game.adv.player.item.name === 'bone'){
			this.hasBone = true;
			this.game.adv.dialogueBox.show("Mmnn, mnnn...bark, bark! \n(Thanks! Your'e my best friend now!)");
			this.game.adv.player.item = null;
		} else {
			
		}
		
	});
	this.npcs.dog.touchInteraction = true;
}

//Gardner stuff
Teddy.Levels.Level1.prototype._initGardner = function(){
	this.npcs.gardener.frame = 1;
	this.npcs.gardener.animations.add('walk',[1,2,1,0],3, true);
	this.npcs.gardener.animations.play('walk');
	this.npcs.gardener.startPatrol();
	this.npcs.gardener.hasVision = true;
	this.npcs.gardener.vision.width = 300;
	this.npcs.gardener.vision.height = 400;
	this.npcs.gardener.hasClippers =true;
	this.npcs.gardener.addWhenSeePlayerAction(function(){
		this.game.adv.dialogueBox.show("Did that teddy just move?\nHmm guess not. It's dirty though.\nI'm just gonna toss it in the trash.");
		this.game.adv.player.caught = true;
	});
	
	this.npcs.gardener.bringToTop();

	this.npcs.gardener._update = this.npcs.gardener.update;
	this.npcs.gardener.update = function(){
		this._update();
		if(this.hasClippers){
			this.game.adv.activeLevel.items.trimmers.x = this.x;//todo change this location
			this.game.adv.activeLevel.items.trimmers.y = this.y;
		}
		var dist =game.physics.arcade.distanceBetween(this, this.game.adv.player);
		
		if(dist < 600){
			if(!this.mumble){
				//if(this.
				this.mumble = game.add.text(this.x-100,this.y + 200,
				'"Pruning...dut da dut ta dut.. . \nI love to prune with these\n clippers in my hand\n ..da dut ta du\n I love to prune in my garden"',
				{
					font: "22px Arial",
					fill: "#424242"
				});
				//this.mumble.fixedToCamera = true;
			}
			

			this.mumble.fixedToCamera = false;
			if(this.y > this.game.adv.player.y){
				this.mumble.y = this.y-260;
			} else {
				this.mumble.y = this.y+200;
			}
				this.mumble.x = this.x-100;
			

			/*
			var locs ={};
				if(this.x < this.game.adv.player.x){
					locs.x = 550;
				} else {
					locs.x = 900;
				}
				if(this.y < this.game.adv.player.y){
					locs.y = 60;
					locs.a = 0;
				} else {
					locs.y = 180;
					locs.a = 1;
				}
				//This is because for some reason the line would not move in this update
				
				if(this.line){
					this.line.destroy();
				}
				this.line = game.add.sprite(locs.x,locs.y,'line');
				this.line.fixedToCamera = true;
				this.line.anchor.setTo(0.5,locs.a);
				this.line.rotation = Phaser.Math.angleBetweenPoints(this.line, this);
				//console.log(this.line.rotation);
			//rotation here
			* */
		} else 	if(this.mumble){
				/*
				if(this.line){
					this.line.destroy();
				}
				*/ 
				this.mumble.destroy();
				this.mumble = null;
			}
		}
}

Teddy.Levels.Level1.prototype._initNessy = function(){
	var n = this.npcs.nessy;
	n.conversations = {
		first : [
			"Well, well wha' do we have here!", 
			"Who are you?", 
			"The name's Nessy.\n I'm a Scottish Urban Legand.\n If ya' don't believe meh just read ma birthmark.",
			"I'll just take your word for it.\n(He looks like a bath toy to me.)", 
			"Suit yaself.\nSo whats'a pretty lass of bear \nlike you doing out here?", 
			"I'm not a lass!\nI'm a boy!",
			"Can you prove it?",
			" Um .........", 
			"I don't have time for this.\nCan you help me?",
			"Help ya do what? Lassie?",
			"Ugh... \nI'm trying to get inside to my boy.\nCan you help me?",
			"It'll cost you.\nI need you to promise meh somethin'.",
			"Ok, what?",
			"Just assure me that if you see some scientist\nabout in white lab coats you won't \nbe tellin' them where I am.",
			"I promise.",
			"Good! Well I don't know how much\nI can help you with. But I do know this.\nThe gardener keeps stacking stones in the garden.",
			"Ok?",
			"Well maybe you should look around for\na loose one and see if ya can \ndo something with it.", 
			"Thank you."
			],
			refirst : [
				"Look for a place to use the loose rock."
			]
	};
	
	n.onConversation = 'first'; 
	n.addInteraction(function(){
		//pauseplayer movment on this one
		
			this.game.adv.dialogueBox.show(n.conversations[n.onConversation]);
			if(n.onConversation === 'first'){
				n.onConversation = 'refirst';
			}
	});
	 
	n.body.imovable = true;
	n.body.moves = false;
	

	n.mumble = game.add.text(n.x-90,n.y-130,'',{
		font: "22px Arial",
		fill: "#424242"
	});
//	dt.mumble.fixedToCamera = true;
	n._update = n.update;
	n.update  = function(){
		this._update();	
		var distToPlayer =game.physics.arcade.distanceBetween(this, this.game.adv.player);
		if(distToPlayer < 300 && n.onConversation === 'first'){
			
			this.mumble.setText("Aye, those crazie scientist a' \nneva gonna find me here!");		
				
		} else if(this.mumble){
			this.mumble.setText('');
			
		}
		game.physics.arcade.collide( this.game.adv.player, this);
	}
}

Teddy.Levels.Level1.prototype._initDumptruck = function(){
	var dt = this.npcs.dumptruck;
	dt.interactDistance = 120;
	dt.conversations = {
		first : [
			'How in the world are you doing that?', 
			"Doing what?", 
			"Walking of course! \n",
			"We've ALWAYS been able to talk to eachother, \nbut none of us toys have ever been able to \n  move on our own.", 
			"Well MY boy NEEDS me! \n I think ... I think, maybe... \nI was just able to wish for it enough to come true!", 
			"Well that's amazing ... and yet also horrifying.",
			"Why is it horrifing?",
			"I've seen enough scary movies about walking toys \nto know that that ain't natural.", 
			"Whatever, I MUST get back into the house, \nbut this is my first time being out here. \nI don't know what to do. Can you help me?",
			"Well the house is just up that way, \n you can't miss it.",
			"However the door is right inside the garden \nand the man is gardening.",
			" I doubt you'd be able to keep on moving if he \nsees you walking around.",
			"What makes you think that?",
			"Well I've seen enough cartoons \nto know this type of thing.",
			"You watch a lot of TV to be an outside toy...",
			"Yeah well, you'll have that. \nAnyway the door is probably too heavy for you\nto open by yourself,",
			"but you'd probably be able to \nget through the cat door.",
			"Thanks, I'll try that first.", 
			"Come back to me if you have any problems ... \nand remember don't let the man see you."
			],
			refirst : [
				"Try to get into the cat door, \nand remember don't let the man see you."
			],
		second : [
			"I'm guesing it didn't go as planned.",
			"The cat door was stuck. \nI tried to push it but my paws are too soft.",
			"Hmm... sounds like you need a \nscrewdriver to pry it open.",
			"There is one on the workbench by the house, \nbut it is guarded by that crazy dog.",
			"You'll probably need to find something \nto distract the dog.",
			"Well what do you suggest?",
			"I don't know. \nYoull probably have to come up with an \nelaborate plan with waaaaay to many steps.",
			"Huh?.. What..",
			"DID STUTTER...? No really did I?\n I stutter sometimes and I don't realize it. ",
			"No you didn't stutter... I just don't understand.",
			"Ok Pedro.. Can I call you Pedro? \n Just look around the yard. Check everything \n you can see. I'm sure you'll figure it out.",
			"Anyway that's all I can help you with.\nI'm gonna take a nap. So leave me alone.",
			"But....",
			"ZZZZZZZZZZZZZ --ZZZZZZZZZZZZ--",
			"mumble ZZZ lay some of the mmZZotZZZ oil \non me  you little jaguar you..ZZZZ",
			"Ok well I guess I'm on my own then.\n I guess I should explore the yard."
		],
		final : [
			"ZZZZZZZZZZZZZZZ ....... ZZZZZZZZZZ"
		]
	};
	
	dt.onConversation = 'first'; 
	dt.addInteraction(function(){
		//pauseplayer movment on this one
		
			this.game.adv.dialogueBox.show(dt.conversations[dt.onConversation]);
			if(dt.onConversation === 'first'){
				dt.onConversation = 'refirst';
			}
			if(dt.onConversation === 'second'){
				dt.onConversation = 'final';
			}
	});
	 
	dt.body.imovable = true;
	dt.body.moves = false;
	

	dt.mumble = game.add.text(dt.x-120,dt.y-140,'',{
		font: "22px Arial",
		fill: "#424242"
	});
//	dt.mumble.fixedToCamera = true;
	dt._update = dt.update;
	dt.update  = function(){
		this._update();	
		var distToPlayer =game.physics.arcade.distanceBetween(this, this.game.adv.player);
		if(distToPlayer < 300 && dt.onConversation === 'first'){
			
			this.mumble.setText("Hey You! The Teddy Bear Walking.\nCome Here. I'm the dumptruck.\nI want to talk to you. Come Here!");			
		} else if(this.mumble){
			this.mumble.setText('');
			
		}
		game.physics.arcade.collide( this.game.adv.player, this);
	}
}
