var Game = function(){};
Game.prototype = {
	preload : function(){
		
		this.started = false;
	},
	
	create : function(){
		
		
		
		var toggleMenu = function(){
			var pause = function(){
				game.paused = true;
			}
			if(!game.paused){
				this.gbg = game.add.sprite(960,640,'greybg');
				this.gbg.x = 0;
				this.gbg.y = 0;
				this.gbg.fixedToCamera = true;
				this.gbg.scale.setTo(10,10);
				this.menu = game.add.sprite(480,320,'menu');
				this.menu.anchor.setTo(0.5,0.5);
				this.menu.fixedToCamera = true;
				/*
				var fakething1 = game.add.sprite(330,96, 'fake');
				fakething1.fixedToCamera = true;
				fakething1.width = 300;
				fakething1.height = 62;
				
				var fakething2 = game.add.sprite(330,160, 'fake');
				fakething2.fixedToCamera = true;
				fakething2.width = 300;
				fakething2.height = 62;
				*/
				game.time.events.add(20,pause);				
				
			} else {
				this.gbg.destroy();
				this.menu.destroy();
				game.paused = false;
			}
		}
		
		var esc = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
		esc.onDown.add(toggleMenu, this);
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.Level = 'Level1';
		game.adv.activeLevel = new Teddy.Levels[this.Level]();
		game.adv.activeLevel.load();		
		game.time.advancedTiming = true;
		game.input.onDown.add(this.menuClick, self);
	},
	
	
	update : function(){			
		 //  this.world.sort('y', Phaser.Group.SORT_ASCENDING);

	},
	render : function(){
		game.debug.text('FPS : '+game.time.fps, 10,10);
		//game.debug.body(game.adv.player);
	},
	menuClick : function(event){
		if(game.paused){
			if(event.x > 330 && event.x < 630 && event.y > 96 && event.y < 158){
				game.paused = false;
				game.adv.activeLevel.music.stop();
				game.state.start('Home',true);
			} else if(event.x > 330 && event.x < 630 && event.y > 160 && event.y < 222){
				game.paused = false;
				game.adv.activeLevel.music.stop();
				game.state.start('Game',true);			
			}
		}
	}
}
