// создадим объект, по нажатию на который игрока перекинет в игру
var StartGame = game.newImageObject({
	w : 3000 * del, h :1000 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/play.png" // путь к картинке
});


var Heroes = game.newImageObject({
	w : 3000 * del, h : 1000 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/pers.png" // путь к картинке
});

var ButSettings = game.newImageObject({
	w : 3000 * del, h : 1000 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/settings.png" // путь к картинке
});


// отпозиционируем объект относительно экранных координат центром в центр
StartGame.setPositionCS(point(width/2, height/2.5));
Heroes.setPositionCS(point(width/2, height-height/2.7));
ButSettings.setPositionCS(point(width/2, height-height/8));

// и объявим функцию, которая  всеё это дело отрисует и обрабботает
var drawMenu = function () {
    
        // рисуем объект, созданный выше
	StartGame.draw();
    Heroes.draw();
    ButSettings.draw();

	if (touch.isPeekObject(StartGame)) { // если все-таки нажал
		return game.startLoop('Countries'); // выходим из текущего игрового цикла в цикл под названием 'game'
	}
    if (touch.isPeekObject(Heroes)) { // если все-таки нажал
		return game.startLoop('Heroes'); 
	}
    if (touch.isPeekObject(ButSettings)) { // если все-таки нажал
		return game.startLoop('Settings'); 
	}
	
};

