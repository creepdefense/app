let SETTINGS = {
	
	// formatting guidelines:
	// non-referrable keys are without single or double quotes, such as "thickness" in electro_splash projectile_settings.
	// referrable keys are with single quotes.
	// strings are in double quotes.
	// groups use single quotes.
	
	'gui_settings': {
		// these are used in the strategy buttons list
		// and also when pressing strategy shortkey; the icon on
		// the tower will be colored with that color.

		'strategy_button_colors': {
			'closest'   : "33AA33",
			'weakest'   : "FFFF1E",
			'slowest'   : "444444",
			'farthest'  : "FFFFFF",
			'strongest' : "FF2200",
			'fastest'   : "6666FF",
		},
	},

	'mod_settings': {
		// how many frames does it take to issue a command on a tower.
		action_time: 150,
	},



	
	// tower weapon graphical effect settings.
	'projectile_settings': {
			
		'electro_splash': [
			{
				color: "BBFFBB",
				trans: 0.36,
				thickness: 1.0,
				bg_color: "00FF00",
				bg_trans: 0.225,
				bg_thickness: 3.6,
			},
			{
				color: "DDDDFF",
				trans: 0.36,
				thickness: 1.2,
				bg_color: "0000FF",
				bg_trans: 0.27,
				bg_thickness: 4.8,
			},
			{
				color: "FFDDDD",
				trans: 0.54,
				thickness: 1.35,
				bg_color: "FF0044",
				bg_trans: 0.54,
				bg_thickness: 5.4,
			},
			{
				color: "FFFFFF",
				trans: 0.45,
				thickness: 1.35,
				bg_color: "BBBBFF",
				bg_trans: 0.315,
				bg_thickness: 4.8,
			}
		],

		'slowtower_shot': [
			{
				color: "BBFFBB",
				trans: 0.8,
				thickness: 1.0,
				bg_color: "00FF00",
				bg_trans: 0.5,
				bg_thickness: 3.6,
			},
			{
				color: "DDDDFF",
				trans: 0.8,
				thickness: 1.2,
				bg_color: "0000FF",
				bg_trans: 0.6,
				bg_thickness: 4.8,
			},
			{
				color: "FFDDDD",
				trans: 0.8,
				thickness: 1.35,
				bg_color: "FF0044",
				bg_trans: 0.8,
				bg_thickness: 5.4,
			},
			{
				color: "FFFFFF",
				trans: 1.0,
				thickness: 1.35,
				bg_color: "BBBBFF",
				bg_trans: 0.7,
				bg_thickness: 4.8,
			},
		],

		'lasertower_shot': [
			{
				color: "DDFFDD",
				trans: 0.8,
				thickness: 1.2,
				bg_color: "00FF00",
				bg_trans: 0.7,
				bg_thickness: 3.6,
			},
			{
				color: "DDDDFF",
				trans: 0.8,
				thickness: 1.2,
				bg_color: "0000FF",
				bg_trans: 0.6,
				bg_thickness: 4.8,
			},
			{
				color: "FFDDDD",
				trans: 0.8,
				thickness: 1.35,
				bg_color: "FF0044",
				bg_trans: 0.8,
				bg_thickness: 5.4,
			},
			{
				color: "FFFFFF",
				trans: 1.0,
				thickness: 1.35,
				bg_color: "BBBBFF",
				bg_trans: 0.7,
				bg_thickness: 4.8,
			},
		],
	
		'teslatower_shot': [
			{
				color: "DDFFDD",
				trans: 0.5,
				thickness: 2.2,
				bg_color: "00FF00",
				bg_trans: 0.3,
				bg_thickness: 6.2,
			},
			{
				color: "DDDDFF",
				trans: 0.6,
				thickness: 2.4,
				bg_color: "0000FF",
				bg_trans: 0.7,
				bg_thickness: 9.6,
			},
			{
				color: "FFBBBB",
				trans: 0.8,
				thickness: 2.4,
				bg_color: "FF0022",
				bg_trans: 0.9,
				bg_thickness: 10.8,
			},
			{
				color: "FFFFFF",
				trans: 0.7,
				thickness: 2.4,
				bg_color: "BBBBFF",
				bg_trans: 0.4,
				bg_thickness: 9.6,
			},
		],
		
		'ultimatetower_shot': [
			{
				color: "DDFFDD",
				trans: 0.5,
				thickness: 3.6,
				bg_color: "00FF00",
				bg_trans: 0.5,
				bg_thickness: 10.8,
			},
			{
				color: "FFFFFF",
				trans: 0.6,
				thickness: 5.4,
				bg_color: "BBBBFF",
				bg_trans: 0.5,
				bg_thickness: 19.2,
			},
		],

		'ultimatetower_splash': [
			{
				color: "DDFFDD",
				trans: 1.0,
				thickness: 40,
				bg_color: "00FF00",
				bg_trans: 0.4,
				bg_thickness: 80,
			},
			{
				color: "FFFFFF",
				trans: 1.0,
				thickness: 40,
				bg_color: "BBBBFF",
				bg_trans: 0.6,
				bg_thickness: 80,
			},
		],
		
		// used for laser,tesla,freezer,electrogun
		'small_splash': [
			{
				color: "BBFFBB",
				trans: 1.0,
				thickness: 10,
				bg_color: "44FF44",
				bg_trans: 0.4,
				bg_thickness: 18,
			},
			{
				color: "DDDDFF",
				trans: 1.0,
				thickness: 11,
				bg_color: "8888FF",
				bg_trans: 0.9,
				bg_thickness: 20,
			},
			{
				color: "FFDDDD",
				trans: 1.0,
				thickness: 12,
				bg_color: "FFAA77",
				bg_trans: 0.9,
				bg_thickness: 22,
			},
			{
				color: "FFFFFF",
				trans: 1.0,
				thickness: 14,
				bg_color: "EEEEFF",
				bg_trans: 0.6,
				bg_thickness: 26,
			},
		],

		'rockettower_splash': [
			{
				color: "BBFFBB",
				trans: 0.8,
				thickness: 16.2,
				bg_color: "44FF44",
				bg_trans: 0.4,
				bg_thickness: 35,
			},
			{
				color: "DDDDFF",
				trans: 1.0,
				thickness: 16.2,
				bg_color: "8888FF",
				bg_trans: 0.8,
				bg_thickness: 40,
			},
			{
				color: "FFDDDD",
				trans: 1.0,
				thickness: 16.2,
				bg_color: "FFAA77",
				bg_trans: 0.7,
				bg_thickness: 47.4,
			},
			{
				color: "FFFFFF",
				trans: 1.0,
				thickness: 16.2,
				bg_color: "EEEEFF",
				bg_trans: 0.6,
				bg_thickness: 47.4,
			},
		],

		'rockettower_bullet': [
			{
				color: "CCFFCC",
				edgecolor: "118811",
				trans: 1.0,
				thickness: 3.5,
				bg_color: "11FF11",
				bg_trans: 0.1,
				bg_thickness: 12.0,
			},
			{
				color: "CCCCFF",
				edgecolor: "222288",
				trans: 1.0,
				thickness: 4.0,
				bg_color: "3333FF",
				bg_trans: 0.2,
				bg_thickness: 15.0,
			},
			{
				color: "FFCCCC",
				edgecolor: "882222",
				trans: 1.0,
				thickness: 5.0,
				bg_color: "FF4466",
				bg_trans: 0.2,
				bg_thickness: 15.0,
			},
			{
				color: "FFFFFF",
				edgecolor: "777788",
				trans: 1.0,
				thickness: 5.0,
				bg_color: "DDDDFF",
				bg_trans: 0.15,
				bg_thickness: 15.0,
			},
		],
	}, // projectile_settings
	
	
	
	
	
	
	
	
	
	
	
	// tower settings limitations:
	// - max 99 towers and 99 upgrades technically possible to add.
	'tower_settings': {
		
		// example: with 75% a tower that costs 1000$ 
		//          will give you 750$ when you sell it.
		'settings': {
			sell_percent: 75,
		},

		// this list allows you to call a specific tower with different name
		// since it would be hard to remember only numbers.
		// you need to remember the numbers only once here and then
		// its much easier to mod the game with these names!
		// note: when defining tower stats, it will use hardcoded
		//       prefix for the tower levels, starting from 1 and ending to 4.
		// note: you cannot have a number in the end of the name.
		'towernamevars': {
			'TOWER_1': 'TOWER_BASIC',
			'TOWER_2': 'TOWER_SLOW',
			'TOWER_3': 'TOWER_SPLASH',
			'TOWER_4': 'TOWER_ROCKET',
			'TOWER_5': 'TOWER_SPEED',
			'TOWER_6': 'TOWER_ULTIMATE',
		},

		// list of buildable towers from the menu.
		// tower level number comes after the tower name.
		'menu_towers': [
			// row 1
			'TOWER_BASIC1',
			'TOWER_SLOW1',
			'TOWER_SPLASH1',
			// row 2
			'TOWER_ROCKET1',
			'TOWER_SPEED1',
			'TOWER_ULTIMATE1',
		],

		// the path is always "modes/*sizemod*/towers/"
		// sizemod is "normal", "small" or "large".
		'graphics': {
			'TOWER_BASIC'   : "1.png",
			'TOWER_SLOW'    : "2.png",
			'TOWER_SPLASH'  : "3.png",
			'TOWER_ROCKET'  : "4.png",
			'TOWER_SPEED'   : "5.png",
			'TOWER_ULTIMATE': "6.png",
		},

		// tower edge opacity. higher value means darker. range 0.0 to 1.0
		'edge_strength': {
			'TOWER_BASIC'   : 0.4,
			'TOWER_SLOW'    : 0.6,
			'TOWER_SPLASH'  : 0.5,
			'TOWER_ROCKET'  : 0.4,
			'TOWER_SPEED'   : 0.4,
			'TOWER_ULTIMATE': 0.4,
		},

		// this list is used to give name for each upgradeable tower, 
		// so you dont need to repeat the name 4 times for each tower!
		// note: you cannot change the key
		'names': {
			'TOWER_BASIC'    : "Laser",
			'TOWER_SLOW'     : "Freezer",
			'TOWER_SPLASH'   : "Electrogun",
			'TOWER_ROCKET'   : "Plasma rocket",
			'TOWER_SPEED'    : "Tesla coil",
			'TOWER_ULTIMATE' : "Annihilator",
		},

		// note: you cannot change the key.
		'default_strategies': {
			'TOWER_BASIC'    : 'closest',
			'TOWER_SLOW'     : 'fastest',
			'TOWER_SPLASH'   : 'closest',
			'TOWER_ROCKET'   : 'strongest',
			'TOWER_SPEED'    : 'strongest',
			'TOWER_ULTIMATE' : 'strongest',
		},

		// the sounds which comes when the tower shoots.
		// sound names refers to 'sound_settings' labels.
		'shot_sounds': {
			'TOWER_BASIC'    : 'laser_shot',
			'TOWER_SLOW'     : 'laser_shot',
			'TOWER_SPLASH'   : 'laser_shot',
			'TOWER_ROCKET'   : 'rocket_shot',
			'TOWER_SPEED'    : 'laser_shot',
			'TOWER_ULTIMATE' : 'annihilator_shot',
		},


		// this list is used to define the basic 4 colors for different tower levels, colors are in hex format.
		// each color must be defined for each tower level separately, because ULTIMATE tower has only 2 levels.
		// you can define any variable names here, but they must match the [stats] variable names.
		'colors': {
			'Green' : "00FF00",
			'Blue'  : "0000FF",
			'Red'   : "FF0000",
			'White' : "FFFFFF",
		},


		'stats': {
			// note: you cannot change the name at left side of = mark.
			// ranges and aoe are in pixels. 
			// dmg = damage
			// rel = reload time, how many frames does it wait until it can shoot again.
			// range = radius how far the tower can shoot.
			// aoe = area of effect, a radius how far from the impact area it will affect on other creeps.
			// decay = at which % from the center of the impact area the damage will decay eventually to zero at the edges.
			//         with aoe 100 and decay 0.75, the damage will start to decay at aoe 75 and at the very edges the damage is lowest.
			//         EXCEPTION: with decay 0.0, the damage does not decay at all! Same applies to decay 1.0, since the decay starts at the edges and ends to edges.
			// slowM = slow multiplier, how much speed is decreased from the creep speed when hit with slow effect. 
			//         if creep speed = 200 and slowM = 0.3, then the creep will move with 200-(200*0.3) = 140 speed.
			//         if no slow effect, this value should be set to zero, however slowT value tells the game if the tower has slow effect or not.
			// slowT = slow time, how long will the slow effect last. if zero, then the tower has no slowing effect at all.
			// splash = will it give insta splash damage when shot? you have to define aoe to make this work! note: rockets cannot have this feature enabled.
			// NO_UPG = a tower cannot be upgraded anymore.
			// 
			//                 cost, range, rel, dmg,   aoe, decay, slowM, slowT, upgradeto, splash, color,   description
			'TOWER_BASIC1'    : [50,    35,  13,  25,    0,   0,    0,     0,   'TOWER_BASIC2',    0, 'Green',  "Cheap upgrades"],
			'TOWER_BASIC2'    : [100,   45,  13,  50,    0,   0,    0,     0,   'TOWER_BASIC3',    0, 'Blue',   "Cheap upgrades"],
			'TOWER_BASIC3'    : [150,   55,  13,  75,    0,   0,    0,     0,   'TOWER_BASIC4',    0, 'Red',    "Cheap upgrades"],
			'TOWER_BASIC4'    : [200,   65,  13,  100,   0,   0,    0,     0,   'NO_UPG',          0, 'White',  "Cheap long range"],

			'TOWER_SLOW1'     : [100,   35,  15,  25,    0,   0,    0.3,   40,  'TOWER_SLOW2',     0, 'Green',  "Slows target"],
			'TOWER_SLOW2'     : [200,   45,  16,  50,    0,   0,    0.35,  40,  'TOWER_SLOW3',     0, 'Blue',   "Slows target"],
			'TOWER_SLOW3'     : [400,   50,  17,  75,    0,   0,    0.45,  50,  'TOWER_SLOW4',     0, 'Red',    "Slows target"],
			'TOWER_SLOW4'     : [3000,  55,  18,  100,   25,  0.7,  0.5,   50,  'NO_UPG',          1, 'White',  "Slows multiple targets"],

			'TOWER_SPLASH1'   : [250,   40,  15,  50,    35,  0.7,  0,     0,   'TOWER_SPLASH2',   1, 'Green',  "Fast area damage"],
			'TOWER_SPLASH2'   : [750,   45,  12,  200,   35,  0.7,  0,     0,   'TOWER_SPLASH3',   1, 'Blue',   "Fast area damage"],
			'TOWER_SPLASH3'   : [3000,  50,  10,  500,   35,  0.6,  0,     0,   'TOWER_SPLASH4',   1, 'Red',    "Fast area damage"],
			'TOWER_SPLASH4'   : [7500,  55,  10,  1150,  35,  0.5,  0,     0,   'NO_UPG',          1, 'White',  "Fast area damage"],

			'TOWER_ROCKET1'   : [1000,  50,  75,  1000,  25,  0.7,  0,     0,   'TOWER_ROCKET2',   0, 'Green',  "Area damage"],
			'TOWER_ROCKET2'   : [3000,  60,  75,  3000,  25,  0.7,  0,     0,   'TOWER_ROCKET3',   0, 'Blue',   "Area damage"],
			'TOWER_ROCKET3'   : [7500,  70,  65,  7500,  30,  0.6,  0,     0,   'TOWER_ROCKET4',   0, 'Red',    "Area damage"],
			'TOWER_ROCKET4'   : [15000, 80,  60,  16500, 35,  0.5,  0,     0,   'NO_UPG',          0, 'White',  "Area damage"],

			'TOWER_SPEED1'    : [1000,  50,  9,   225,   0,   0,    0,     0,   'TOWER_SPEED2',    0, 'Green',  "Fast reload"],
			'TOWER_SPEED2'    : [3000,  55,  7,   550,   0,   0,    0,     0,   'TOWER_SPEED3',    0, 'Blue',   "Fast reload"],
			'TOWER_SPEED3'    : [7500,  60,  5,   1100,  0,   0,    0,     0,   'TOWER_SPEED4',    0, 'Red',    "Fast reload"],
			'TOWER_SPEED4'    : [15000, 65,  3,   1800,  0,   0,    0,     0,   'NO_UPG',          0, 'White',  "Fast reload"],

			'TOWER_ULTIMATE1' : [20000, 100, 100, 25000, 0,   0,    0,     0,   'TOWER_ULTIMATE2', 0, 'Green',  "Long range"],
			'TOWER_ULTIMATE2' : [50000, 150, 50,  40000, 0,   0,    0,     0,   'NO_UPG',          0, 'White',  "Ultra long range"],
		},

	}, // tower_settings
	
	
	
	
	
	
	
	
	'creep_settings': {
		// used to color the creep death animation.
		'explosion_colors': {
			'Green' : "00FF00",
			'White' : "FFFFFF",
			'Blue'  : "4355FF",
			'Red'   : "B06401",
		},
		// SI = slow immunity
		// RG% = regeneration percent.
		// hp = health points.
		// inc% = how many percents from creep cost becomes your income.
		// xcolor = explosion color.
		//              cost,    inc%,  hp,   speed,  RG%,      SI, xcolor, name,         description
		'stats': {
			'creep1'  : [50,      10, 300,      70,  0.065,     0, 'Green', "Kite",       "Regenerates"],
			'creep2'  : [100,     10, 700,      65,  0,         1, 'White', "Flake",      "Immune to slow"],
			'creep3'  : [250,     10, 1400,     80,  0,         0, 'Blue',  "Spider",     ""],
			'creep4'  : [500,     10, 3500,     50,  0,         0, 'Red',   "Bug",        ""],
			
			'creep5'  : [1000,    9,  6000,     60,  0.05,      0, 'Green', "Hawk",       "Regenerates"],
			'creep6'  : [2000,    9,  14000,    65,  0,         1, 'White', "Ray",        "Immune to slow"],
			'creep7'  : [4000,    9,  30000,    90,  0,         0, 'Blue',  "Raider",     ""],
			'creep8'  : [8000,    9,  80000,    60,  0,         0, 'Red',   "Tank",       ""],
			
			'creep9'  : [15000,   8,  120000,   70,  0.0416666, 0, 'Green', "Eagle",      "Regenerates"],
			'creep10' : [25000,   8,  250000,   75,  0,         1, 'White', "Shark",      "Immune to slow"],
			'creep11' : [40000,   8,  500000,   100, 0,         0, 'Blue',  "Cube",       ""],
			'creep12' : [60000,   8,  1200000,  65,  0,         0, 'Red',   "Triton",     ""],
			
			'creep13' : [100000,  7,  1400000,  65,  0.0357142, 0, 'Green', "Hammer",     "Regenerates"],
			'creep14' : [200000,  7,  2500000,  80,  0,         1, 'White', "Enterprise", "Immune to slow"],
			'creep15' : [400000,  7,  6000000,  140, 0,         0, 'Blue',  "Raptor",     ""],
			'creep16' : [1250000, 7,  15000000, 70,  0,         0, 'Red',   "Cruiser",    "Spawns creeps"],
		},
		
		// list of creeps appearing in the game menu.
		'menu_creeps': [
			// FIRST ROW:
			'creep1',
			'creep2',
			'creep3',
			'creep4',
			// SECOND ROW:
			'creep5',
			'creep6',
			'creep7',
			'creep8',
			// THIRD ROW:
			'creep9',
			'creep10',
			'creep11',
			'creep12',
			// FOURTH ROW:
			'creep13',
			'creep14',
			'creep15',
			'creep16',
		],
	},
	
	
	
	
	
	
	
	
	
	
	
	'sounds': {
		// its possible to add .wav files as sounds too.
		// if done so, no other information can be given.
		'custom_sound': {
			filename: "wavfile.wav",
		},

		'annihilator_shot': {
			wave_type: "noise",
			sound_vol: 0.5675,
			env_decay_vol: 1.0,
			env_attack: 0.0,
			env_decay: 1.0,
			env_sustain: 1.0,
			env_punch: 0.57,
			base_freq: 0.3075,
			freq_ramp: -0.79,
			freq_dramp: 0.084999,
			vib_strength: 0.245,
			vib_speed: 1.0,
			arp_mod: 0.605,
			arp_speed: 0.71,
			repeat_speed: 0.757501,
			pha_offset: -0.075,
			pha_ramp: -0.190001,
			lpf_freq: 1.0,
			lpf_ramp: 1.0,
			lpf_resonance: 0.0,
			hpf_freq: 0.0,
			hpf_ramp: -1.0,
			duty: 0.5,
			duty_ramp: 0.0,
			freq_limit: 0.0,
			noise_buf_size: 32,
			total_samples: 8,
		},

		'rocket_shot': {
			wave_type: "noise",
			sound_vol: 0.72,
			env_decay_vol: 1.0,
			env_attack: 0.0,
			env_decay: 0.525,
			env_sustain: 0.325,
			env_punch: 0.995,
			base_freq: 0.435,
			freq_ramp: -0.79,
			freq_dramp: 0.084999,
			vib_strength: 0.44,
			vib_speed: 0.62,
			arp_mod: -0.24,
			arp_speed: 0.995,
			repeat_speed: 0.29,
			pha_offset: -0.075,
			pha_ramp: -0.190001,
			lpf_freq: 1.0,
			lpf_ramp: 1.0,
			lpf_resonance: 0.0,
			hpf_freq: 0.0,
			hpf_ramp: -1.0,
			duty: 0.5,
			duty_ramp: 0.0,
			freq_limit: 0.0,
			noise_buf_size: 32,
			total_samples: 8,
		},

		'laser_shot': {
			wave_type: "squarewave",
			sound_vol: 0.4575,
			env_decay_vol: 0.0,
			env_attack: 0.0,
			env_decay: 0.62986,
			env_sustain: 0.365,
			env_punch: 0.47878,
			base_freq: 0.55495,
			freq_ramp: -0.224999,
			freq_dramp: 0.0,
			vib_strength: 0.0,
			vib_speed: 0.0,
			arp_mod: 0.0,
			arp_speed: 0.0,
			repeat_speed: 0.0,
			pha_offset: 0.0,
			pha_ramp: 0.0,
			lpf_freq: 1.0,
			lpf_ramp: 0.0,
			lpf_resonance: 0.0,
			hpf_freq: 0.0,
			hpf_ramp: 0.0,
			duty: 0.0,
			duty_ramp: 0.0,
			freq_limit: 0.0,
			noise_buf_size: 32,
			total_samples: 8,
		},

		'game_lost': {
			wave_type: "sawtooth",
			sound_vol: 0.52,
			env_decay_vol: 1.0,
			env_attack: 0.0,
			env_decay: 1.0,
			env_sustain: 1.0,
			env_punch: 0.99,
			base_freq: 0.35,
			freq_ramp: -0.14,
			freq_dramp: 0.08,
			vib_strength: 0.0,
			vib_speed: 0.94,
			arp_mod: 0.6,
			arp_speed: 0.73,
			repeat_speed: 0.04,
			pha_offset: -0.5,
			pha_ramp: -0.08,
			lpf_freq: 1.0,
			lpf_ramp: 1.0,
			lpf_resonance: 0.0,
			hpf_freq: 0.0,
			hpf_ramp: -1.0,
			duty: 0.0,
			duty_ramp: -1.0,
			freq_limit: 0.0,
			noise_buf_size: 32,
			total_samples: 8,
		},
	},

};