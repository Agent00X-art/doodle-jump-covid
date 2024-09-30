// создадим объект, по нажатию на который игрока перекинет в игру
var newGame = game.newTextObject({
	text : 'Новая игра', // надпись на объекте
	font : 'serif', // шрифт надписи
	size : 300*del, // размер шрифта (помним про del)
	color : '#363636' // цвет текста
});
var Heroes = game.newTextObject({
	text : 'Выбор персонажа', // надпись на объекте
	font : 'serif', // шрифт надписи
	size : 300*del, // размер шрифта (помним про del)
	color : '#363636' // цвет текста
});


// отпозиционируем объект относительно экранных координат центром в центр
newGame.setPositionCS(point(width/2, height/2));
Heroes.setPositionCS(point(width/2, height/2+40));

// и объявим функцию, которая  всеё это дело отрисует и обрабботает
var drawMenu = function () {
        // рисуем объект, созданный выше
	newGame.draw();
    Heroes.draw();
		
	if (touch.isPeekObject(newGame)) {
		clearLevel(1);
        createLevel(4);
		// если все-таки нажал
		
		

		return game.startLoop('game'); // выходим из текущего игрового цикла в цикл под названием 'game'
	}
    if (touch.isPeekObject(Heroes)) { // если все-таки нажал
		return game.startLoop('Heroes'); 
	}
	
};

