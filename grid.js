// определим размеры ячейки (в будущем учитываем, что все размеры надо учитывать с коэффициентом del)
var sizeX = 200 * del,
		sizeY = 200 * del;
// сама функция отрисовки
var drawGrid = function () {

        // узнаем, сколько раз нам надо повторить клеточку по X и Y
	var x = width / sizeX,
			y = height / sizeY;
        // Обращаемся к команде отрисовки прямоугольника
	OOP.forXY(x, y, function (x, y) { // первые два аргумента - это повторения по X и Y, затем функция
		brush.drawRectS({
			x : (sizeX + 2)*x, // позиция по X
			y : (sizeY + 2)*y, // по Y
			fillColor : 'white', // цвет заливки
			w : sizeX, h : sizeY // ширина и высота
		});
	});
};

var ChinaBackground = function (division) {
	var BackGR = game.newImageObject({
	w : width, h : height,
	file : "img/pagoda.png"
	});
	var a=height;
	while(a>0){
	BackGR.setPositionCS(point(width/2, height/2));
    a=a-height/division;
	BackGR.draw();};
};

var RussiaBackground = function (division) {
	var BackGR = game.newImageObject({
	w : width, h : height,
	file : "img/kremlin.JPG"
	});
	var a=height;
	while(a>0){
	BackGR.setPositionCS(point(width/2, height/2));
    a=a-height/division;
	BackGR.draw();};
};

var ChinaBackground3 = function (division) {
	var BackGR = game.newImageObject({
	w : width, h : height,
	file : "img/3star.png"
	});
	var a=height;
	while(a>0){
	BackGR.setPositionCS(point(width/2, height/2));
    a=a-height/division;
	BackGR.draw();};
};

var ChinaBackground2 = function (division) {
	var BackGR = game.newImageObject({
	w : width, h : height,
	file : "img/2star.png"
	});
	var a=height;
	while(a>0){
	BackGR.setPositionCS(point(width/2, height/2));
    a=a-height/division;
	BackGR.draw();};
};

var ChinaBackground1 = function (division) {
	var BackGR = game.newImageObject({
	w : width, h : height,
	file : "img/1star.png"
	});
	var a=height;
	while(a>0){
	BackGR.setPositionCS(point(width/2, height/2));
    a=a-height/division;
	BackGR.draw();};
};

var RussiaBackground3 = function (division) {
	var BackGR = game.newImageObject({
	w : width, h : height,
	file : "img/3star.png"
	});
	var a=height;
	while(a>0){
	BackGR.setPositionCS(point(width/2, height/2));
    a=a-height/division;
	BackGR.draw();};
};

var RussiaBackground2 = function (division) {
	var BackGR = game.newImageObject({
	w : width, h : height,
	file : "img/2star.png"
	});
	var a=height;
	while(a>0){
	BackGR.setPositionCS(point(width/2, height/2));
    a=a-height/division;
	BackGR.draw();};
};

var RussiaBackground1 = function (division) {
	var BackGR = game.newImageObject({
	w : width, h : height,
	file : "img/1star.png"
	});
	var a=height;
	while(a>0){
	BackGR.setPositionCS(point(width/2, height/2));
    a=a-height/division;
	BackGR.draw();};
};

var MainBackground = function (division) {
	var BackGR = game.newImageObject({
	w : width, h : height,
	file : "img/main.jpg"
	});
	var a=height;
	while(a>0){
	BackGR.setPositionCS(point(width/2, height/2));
    a=a-height/division;
	BackGR.draw();};
};
var HeroBackground = function (division) {
	var BackGR = game.newImageObject({
	w : width, h : height,
	file : "img/heroback.png"
	});
	var a=height;
	while(a>0){
	BackGR.setPositionCS(point(width/2, height/2));
    a=a-height/division;
	BackGR.draw();};
};
var KalendarBackground = function (division) {
	var BackGR = game.newImageObject({
	w : width, h : height,
	file : "img/kalendar.png"
	});
	var a=height;
	while(a>0){
	BackGR.setPositionCS(point(width/2, height/2));
    a=a-height/division;
	BackGR.draw();};
};

