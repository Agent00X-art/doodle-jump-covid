
var pjs = new PointJS('2d', 400, 400);
pjs.system.initFullPage();

var vector = pjs.vector;
var log = pjs.system.log;
var game = pjs.game;
var point = vector.point;
var size = vector.size;
var camera = pjs.camera;
var brush = pjs.brush;
var OOP = pjs.OOP;
var math = pjs.math;
var st=0;
var touch = pjs.touchControl;
touch.initTouchControl();

// ширина и высота экрана после развертывания игры
var width = game.getWH().w;
var height = game.getWH().h;

// для единого размера подгонять размеры всех объектов будем с учетом коэффициента
var del = height / 1000 / 5;

// сюда будем записывать delta-time для плавности движения в игре
var dt;
var dy3;
// счет нашего игрока во время прохождения игры
var sizeHero = 600;
var sizeHeroMenu = 1000;
const MaxLevels=10;
const MaxValue=10; // Количество всех персонажей
var volBack = 0;
var volEff = 0;
var setEff = true;
var setBack = true;
var score = 0;
var coins = 1000;
var keys = [];
keys[1]=true;
for (var i = 2; i < MaxValue+1; i++) keys[i] = false;

// После проигрыша с.да запишем счет, набравшийся за уровень
var levelScore = 0;

// получим счет из локального хранилища (если есть) и запомним его как лучший рекорд в oldScore
var tmpScore = localStorage.getItem('score');
var oldScore = tmpScore ? tmpScore : 0;
var mainAudio = new Audio('audio/main.ogg');
var jumpAudio = new Audio('audio/jump.mp3');
var coinAudio = new Audio('audio/purchase.mp3');
var Speed = 15;
var hideBlocks = 12; // 12, 9, 8
var checkBlock = 0;
var russiaStars = [];
var chinaStars = [];

var russiaCheck = [];
var chinaCheck = [];
for (var i = 1; i < MaxLevels+1; i++) {
    russiaCheck[i] = false;
    chinaCheck[i] = false;
}
for (var i = 1; i < MaxLevels+1; i++) {
    russiaStars[i]=0;
    chinaStars[i]=0;
}

var hero="img/COVID1.png";
var st = 1; 
var LevelRussia = 0;
var LevelChina = 0;
var Countrie = 0;
var winScore = 0;
var winJump = 0;
var star = 0;
	
	
