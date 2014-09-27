var Main = function(){};
Main.prototype = {
	create : function(){
		

		var start = function(){			
			//stop music then start
			var mT = game.add.tween(this.cmusic).to({volume:0}, 2000);
			var s = this.game.add.tween(this.spr_bg);		
			s.to({ alpha: 1 }, 2000, null);
			mT.onComplete.add(function(){
				game.state.start('Game',true);
			});
			s.start();
			mT.start();
		}
		/*
		var esc = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
		esc.onDown.add(start, this);
		
		this.music = game.add.audio('introMusic',1,true);
		this.music.play('',0,.4,true);
		
		game.add.sprite(0,0,'title');
		
		
		
		var startButton = game.add.button(100,366,'',this.fadeOut, this);
		startButton.width = 250;
		startButton.height = 90;
*/
		
		//DO NOT DELETE ABOVE IT IS IMPORTANT
		

		game.state.start('Game',true); //comment or delete this allow title and intro
	},
	
	fadeOut : function(){
		this.spr_bg = this.game.add.graphics(0, 0);
		this.spr_bg.beginFill('#000000', 1);
		this.spr_bg.drawRect(0, 0, this.game.width, this.game.height);
		this.spr_bg.alpha = 0;
		this.spr_bg.endFill();

		this.s = this.game.add.tween(this.spr_bg);
		this.s.to({ alpha: 1 }, 1200, null);
		this.s.onComplete.add(function(){
			this.music.stop();
			this.fadeIn();
		}, this);
		this.s.start();					
		game.add.tween(this.music).to({volume:0}, 1200).start();
	},
	
	fadeIn : function() {		
		this.cmusic = game.add.audio('cutsceneMusic',1,true);
		this.cmusic.play('',0,.8,true);
		
		this.introImg = game.add.sprite(-3500,-620,'intro');
		this.introImg.scale.setTo(2.4,2.4);
		game.world.bringToTop(this.spr_bg);
		var s = this.game.add.tween(this.spr_bg);
		game.add.text(10, 610,'[ESC to Skip]' , {
				font: "12px Georgia",
				fill: "#ffffff"
			});
		s.to({ alpha: 0 }, 5000, null);
		s.onComplete.add(function(){
			this.tween();
			game.blink = game.add.sprite(656,140,'blink');
			game.blink.animations.add('blink',[0,1,2,3,3,2,1,0], 16);
			var texts = [
				{
					text : "I'm all alone ...",
					x : 30,
					y : 30,
					movement : 'rtl'
				},
				{
					text :"I'm not where \nI am supposed to be.",
					x : 100,
					y: 460,
					movement : 'ltr'
				},
				{
					text : "My boy needs ME \nto protect him!",
					x:300,
					y:10,
					movement : 'none'
				}, 
				{
					text : "But what can I do?",
					x : 10,
					y:250,
					movement : 'rtl'
				},
				 {
					text : 'I must find the \n will to become ...',
					x : 10,
					y : 300,
					movement : 'ltr'
				},
				{
					text : 'ALIVE',
					x : game.world.centerX-100,
					y:game.world.centerY,
					movement : 'none'
				}
			];			
			
			this.stext =texts[0]

			this.guideText = game.add.text(this.stext.x, this.stext.y,this.stext.text , {
				font: "80px Georgia",
				fill: "#ffffff"
			});
		
			var moves = {
				rtl :  this.game.add.tween(this.guideText),
				ltr :  this.game.add.tween(this.guideText)
			};

		//	moves.rtl.to({x : this.stext.x-400}, 3000);
			
		//	moves.ltr.to({x : this.stext.x+400}, 3000);
			
			var i = 0;
			var newText = function(){
				
				 i++;
				 if(texts[i]){
					this.stext = texts[i];
					this.guideText.setText(this.stext.text);
					this.guideText.x = this.stext.x;
					this.guideText.y = this.stext.y;
				}
				
			}
			var blinkOnce = function(){
				game.blink.animations.play('blink');
			}
			game.time.events.loop(Phaser.Timer.SECOND*5, newText, this);
			game.time.events.add(Phaser.Timer.SECOND*26,blinkOnce);
			
			game.time.events.add(Phaser.Timer.SECOND*28,blinkOnce);
			
		}, this);
		s.start();
		
	},
	
	tween : function(){
		var image = this.introImg;
		var s = game.add.tween(image.scale).to({x : 0.44, y : 0.44}, 25000);
		var	l = game.add.tween(image).to({x:0,y:0},25000);
		s.start();
		l.start();
		l.onComplete.add(function(){
			game.time.events.add(Phaser.Timer.SECOND * 7.3, this.fadeMusic, this);
		}, this);
		
		
	},
	fadeMusic  :function(){
			
		var mT = game.add.tween(this.cmusic).to({volume:0}, 300);
		mT.onComplete.add(function(){
			game.state.start('Game',true);
		});
		mT.start();
	}
}
