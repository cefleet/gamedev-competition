var End = function(){};
End.prototype = {
	create : function(){			
		this.cmusic = game.add.audio('cutsceneMusic',1,true);
		this.cmusic.play('',0,.8,true);
		
		this.e4 = game.add.sprite(0,0,'end4');
		this.e3 = game.add.sprite(0,0,'end3');
		this.e2 = game.add.sprite(0,0,'end2');
		this.e1 = game.add.sprite(0,0,'end1');
		
		this.e1.scale.setTo(1.2,1.2);
		this.e1.x = -200;
		this.e1.y = 0;
		
		this.spr_bg = this.game.add.graphics(0, 0);
		this.spr_bg.beginFill('#000000', 1);
		this.spr_bg.drawRect(0, 0, this.game.width, this.game.height);
		this.spr_bg.alpha = 1;
		this.spr_bg.endFill();

		this.s = this.game.add.tween(this.spr_bg);
		this.s.to({ alpha: 0 }, 1200, null);
		this.s.onComplete.add(function(){
			this.firstSlide();
		},this);
		
		this.s.start();
	},
	
	firstSlide  : function(){
		var	l = game.add.tween(this.e1).to({x:-100,y:-80},10000);
		var s = game.add.tween(this.e1.scale).to({x: 1, y:1},10000);
		l.onComplete.add(function(){
			this.secondSlide();
		},this);
		s.start();
		l.start();
	},
	
	secondSlide : function(){
		this.e2.scale.setTo(1.4,1.4);
		this.e1.destroy();		
		var	l = game.add.tween(this.e2).to({x:-100,y : -250},9000);
		l.onComplete.add(function(){
			this.thirdSlide();
		},this);
		l.start();
	},
	
	thirdSlide : function(){
		this.e3.scale.setTo(2.5,2.5);
		this.e2.destroy();
		this.e3.x = -800;
		this.e3.y = -900;
		var	l = game.add.tween(this.e3).to({y : -160, x : -50},17000);
		var s = game.add.tween(this.e3.scale).to({y : 1,x:1},17000);
		l.onComplete.add(function(){
			this.forthSlide();
		},this);
		l.start();
		s.start();
	},
	
	forthSlide : function(){
	//	this.e3.destroy();
			var s = this.game.add.tween(this.spr_bg);
			s.to({ alpha: 1 }, 1200, null);
			s.onComplete.add(function(){
				this.forthplusSlide();
			},this);
			s.start();
	},
	
	forthplusSlide : function(){
		game.time.events.add(Phaser.Timer.SECOND * 5, this.fithSlide, this);
	},
	
	fithSlide : function(){
		this.e3.destroy();
		var s = this.game.add.tween(this.spr_bg);
		s.to({ alpha: 0 }, 2500, null);
		s.onComplete.add(function(){
			game.time.events.add(Phaser.Timer.SECOND * 9, this.sixthSlide, this);
		},this);
		s.start();
	},
	
	sixthSlide : function(){
		var s = this.game.add.tween(this.spr_bg);
		s.to({alpha:1},2500,null);
		s.onComplete.add(function(){
			this.cmusic.stop('',0,.8,true);
			game.state.start('Home',true);
		},this);
		s.start();
	},
	
	fadeIn : function() {		
		this.cmusic = game.add.audio('cutsceneMusic',1,true);
		this.cmusic.play('',0,.8,true);
				
		
		
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
