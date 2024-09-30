var BackCount =  game.newImageObject({
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/door.png" // путь к картинке
});


var newGame = game.newTextObject({
	text : 'Китай', // надпись на объекте
	font : 'serif', // шрифт надписи
	size : 300*del, // размер шрифта (помним про del)
	color : '#363636' // цвет текста
});
var newGame1 = game.newTextObject({
	text : 'Россия', // надпись на объекте
	font : 'serif', // шрифт надписи
	size : 300*del, // размер шрифта (помним про del)
	color : '#363636' // цвет текста
});

BackCount.setPositionCS(point(width/2, height/2+120));
newGame.setPositionCS(point(width/2, height/2));
newGame1.setPositionCS(point(width/2, height/4));



var Countries = function () {
    newGame1.draw();
	newGame.draw();
    BackCount.draw();
 // рисуем персонажа
	
    if (touch.isPeekObject(newGame)) { // если все-таки нажал
		
        mainAudio.src = ('audio/china.mp3');

	
		Money.draw();
		return game.startLoop('KalChina'); // выходим из текущего игрового цикла в цикл под названием 'game'
	}
    
	if (touch.isPeekObject(newGame1)) { // если все-таки нажал
		
        mainAudio.src = ('audio/russia.mp3');
		
		Money.draw();
		return game.startLoop('KalRussia'); // выходим из текущего игрового цикла в цикл под названием 'game'
	}
    if (touch.isPeekObject(BackCount)) { // если все-таки нажал
		return game.startLoop('menu'); 
	}
    										   
};