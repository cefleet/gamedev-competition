module.exports = function(grunt){
	grunt.initConfig({
	uglify : {
		options : {
			banner :'/*! The Life of Bear <%= grunt.template.today("dd-mm-yyyy") %> */\n',
			compress : {
				drop_console:true,
			},
			mangle : true
		},
		dist : {
			files : {
				'dist/bear.js' : [
					'src/lib/phaser/phaser.min.js',
					'src/lib/Adventurer/Adventurer.js',
					'src/lib/Adventurer/Player.js',
					'src/lib/Adventurer/Control.js',
					'src/lib/Adventurer/AdvTilemap.js',
					'src/lib/Adventurer/NPC.js',
					'src/lib/Adventurer/Trigger.js',
					'src/lib/Adventurer/DialogueBox.js',
					'src/lib/Adventurer/Item.js',
					'src/Loading.js',
					'src/Home.js',
					'src/Game.js',
					'src/End.js',
					'src/game.js',
					'src/LevelManager.js',
					'src/Level.js',
					'src/levels/Level1.js'
				]
			}
		}
	}
	
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);	
}
