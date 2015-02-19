var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create });


function preload () {
    game.load.image('crimescene','assets/background.png');
    game.load.image('gg', 'assets/gg.png');
    game.load.image('gk', 'assets/gk.png');
    game.load.image('gr', 'assets/gr.png');
    game.load.image('guilla','assets/guilla.png');
    game.load.image('kg','assets/kg.png');
    game.load.image('kk','assets/kk.png');
    game.load.image('knife','assets/knife.png');
    game.load.image('kr','assets/kr.png');
    game.load.image('living','assets/living.png');
    game.load.image('rg','assets/rg.png');
    game.load.image('rk','assets/rk.png');
    game.load.image('rope','assets/rope.png'); 
    game.load.image('rr','assets/rr.png');
    game.load.image('welcome','assets/welcome.png');
    game.load.image('letskill','assets/letskill.png');
    game.load.image('csi','assets/csi.png'); 
    game.load.image('brainwork','assets/brainwork.png');
    game.load.image('done','assets/done.png');
    game.load.image('firstquestion','assets/firstweapon.png');
    game.load.image('secondquestion','assets/secondweapon.png');
   
}

var background;
var next;
var body;
var sknife;
var srope;
var sguilla;
var nknife;
var nrope;
var nguilla;
var knife1 = false;
var rope1 = false;
var guilla1 = false;
var knife2 = false;
var rope2 = false;
var guilla2 = false;
var screen2;
var udone;

var iknife;
var irope;
var iguilla;
var iknife2;
var irope2;
var iguilla2;

var wrong = false;
var question;


function create() {

	//the main menu of the game
	background = game.add.sprite(0, 0, 'welcome');
	next = game.add.sprite(260,500, 'letskill');
  
	//  Enables all kind of input actions on this image (click, etc)
  	next.inputEnabled = true;
  	next.events.onInputDown.add(intro, this);

}

//The first phase of the game.
function intro () {
	//adjustments
	background.loadTexture('crimescene',0);
	next.destroy();
	
	//additions
	body = game.add.sprite(300,90,'living');
	sknife = game.add.sprite(550,0,'knife');
	sknife.inputEnabled = true;
	srope = game.add.sprite(688,0,'rope');
	srope.inputEnabled = true;
	sguilla = game.add.sprite(675,116,'guilla');
	sguilla.inputEnabled = true;
	
	sknife.events.onInputDown.add(firstk, this);
	srope.events.onInputDown.add(firstr, this);
	sguilla.events.onInputDown.add(firstg, this);
}
////////////////////////////////////////////////////////////////////////////////
//the knife kills first
function firstk () {
	knife1 = true;
	body.loadTexture('kk',0);
	body.x = 320;
	body.y = 133;
	
	sknife.events.onInputUp.add(killed, this);
} 
//the rope kills first
function firstr () {
	rope1 = true;
	body.loadTexture('rr',0);
	body.x = 320;
	body.y = 133;
	
	srope.events.onInputUp.add(killed,this);
}
//the guillotine kills first
function firstg () {
	guilla1 = true;
	body.loadTexture('gg',0);
	body.x = 320;
	body.y = 224;
	
	sguilla.events.onInputUp.add(killed,this);
}
////////////////////////////////////////////////////////////////////////////////
//player1 kills with first weapon
function killed () {
	sknife.kill();
	srope.kill();
	sguilla.kill();
	
	nknife = game.add.sprite(550,0,'knife');
	nknife.inputEnabled = true;
	nrope = game.add.sprite(688,0,'rope');
	nrope.inputEnabled = true;
	nguilla = game.add.sprite(675,116,'guilla');
	nguilla.inputEnabled = true;
	
	nknife.events.onInputDown.add(secondk, this);
	nrope.events.onInputDown.add(secondr, this);
	nguilla.events.onInputDown.add(secondg, this);
}
///////////////////////////////////////////////////////////////////////////////
//the knife is used second
function secondk () {
	knife2 = true;
	if(knife1)
	{
		body.loadTexture('kk',0);
	}
	if(rope1)
	{
		body.loadTexture('rk',0);
	}
	if(guilla1)
	{
		body.loadTexture('gk',0);
	}
	
	nknife.events.onInputUp.add(hide,this);
} 
//the rope is used second
function secondr () {
	rope2 = true;
	if(knife1)
	{
		body.loadTexture('kr',0);
	}
	if(rope1)
	{
		body.loadTexture('rr',0);
	}
	if(guilla1)
	{
		body.loadTexture('gr',0);
	}

	
	nrope.events.onInputUp.add(hide,this);
}
//the guillotine is used second
function secondg () {
	guilla2 = true;
	body.x = 320;
	body.y = 224;
	if(knife1===true)
	{
		body.loadTexture('kg',0);
	}
	if(rope1===true)
	{
		body.loadTexture('rg',0);
	}
	if(guilla1===true)
	{
		body.loadTexture('gg',0);
	}
	
	nguilla.events.onInputUp.add(hide,this);
}
////////////////////////////////////////////////////////////////////////////////
//player1 uses second weapon as distraction
function hide () {
	nknife.inputEnabled = false;
	nrope.inputEnabled = false;
	nguilla.inputEnabled = false;
	
	udone = game.add.sprite(500,400, 'done');
  
	//  Enables all kind of input actions on this image (click, etc)
  	udone.inputEnabled = true;	
	udone.events.onInputUp.add(nextplayer, this);
}

function nextplayer () {
	udone.destroy();
	screen2 = game.add.sprite(0,0,'csi');
	next = game.add.sprite(260,500, 'brainwork');
	next.x = 260;
	next.y = 500;
  
	//  Enables all kind of input actions on this image (click, etc)
	next.inputEnabled = true;	
	next.events.onInputDown.add(investigate, this);
}

//player2 chooses which weapons were used and in what order
// (or just which one actually did the killing)
function investigate () {
	screen2.destroy();
	next.destroy();
	
	nknife.kill();
	nrope.kill();
	nguilla.kill();
	
	question = game.add.sprite(150,60,'firstquestion');
	
	iknife = game.add.sprite(550,0,'knife');
	iknife.inputEnabled = true;
	irope = game.add.sprite(688,0,'rope');
	irope.inputEnabled = true;
	iguilla = game.add.sprite(675,116,'guilla');
	iguilla.inputEnabled = true;
	
	iknife.events.onInputDown.add(secondk, this);
	irope.events.onInputDown.add(secondr, this);
	iguilla.events.onInputDown.add(secondg, this);
} 

function guessknife1 () {
	
}

function guessrope1 () {
	
}

function guessguilla1 () {
	
}

function investigate2 () {
	 
}

function guessknife1 () {
	
}

function guessrope1 () {
	
}

function guessguilla1 () {
	
}

function conclusion () {
	
}

