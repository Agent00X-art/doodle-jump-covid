var stop = game.newTextObject({
	x : 100, y : 10, 
	text : '||', // надпись на объекте
	font : 'serif', // шрифт надписи
	size : 300*del, // размер шрифта (помним про del)
	color : '#363636' // цвет текста
});
var Back = game.newTextObject({
	x : 50, y : 100, 
	text : 'вернуться', // надпись на объекте
	font : 'serif', // шрифт надписи
	size : 300*del, // размер шрифта (помним про del)
	color : '#363636' // цвет текста
});
var drawPause = function () {
stop.draw();

if (touch.(stop)) {game.stop('game');
	Back.draw()};
	if (touch.isPress(Back)) {game.start('game')}}
	