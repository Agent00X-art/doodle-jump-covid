var pl = game.newImageObject({ // начальная позиция, но по сути не требуется
	w : sizeHero * del, h : sizeHero * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : hero // путь к картинке
});

var dy = 5 * del; // сила, движущая объект вниз или вверх
var dmax = 70 * del; // максимальное ускорение
var dx = 0; // вила, движущая объект влево или вправо

// определим ту самую функцию отрисовки персонажа
var drawPlayer = function () {

        // тут подсчитываем счет. Помним, что вверх ось Y уменьшается!
	if (pl.y < score) {
		score = Math.ceil(pl.y);
		
	}

	if (Math.abs(score)-91 > winScore){
        winCount();
	}
	
	if (checkBlock==winJump){
        winCount();
	}
	
	pl.draw(); // рисуем персонажа
	pl.move(point(0, dy*dt)); // двигаем его вниз или верх с учетомdelta-time
	dy += dy < dmax ? del*dt : 0; // ускоряем, если максимум скорости вниз еще не достигнут (гравитация)

        // если игрок нажимает на тач (экран)
	if (touch.isDown()) {
		if (touch.getPositionS().x > width/2) // нажатие по правой области экрана (больше половины ширины экрана)
			dx = 30*del; // установим скорость движения положительным числом (вправо двигаться)
		else // иначе
			dx = -30*del; // иначе устанавливаем скорость отрицательным числом (влево)

                // теперь проверим, в какую сторону у нас двигается объект
		if (dx > 0) { // если вправо
			pl.setFlip(0, 0); // сбрасываем зеркалирование (ведь по умолчанию картинка "смотрит" вправо)
			if (pl.x > width) { // если он вышел за пределы экрана
				pl.x = -pl.w; // телепортируем его на другую сторону
			}
		}
		else if (dx < 0) { // если двигается влево
			pl.setFlip(1, 0); // зеркалим картинку
			if (pl.x+pl.w < 0) { // опять же, если вышел за пределы экрана, телепортируем на другую сторону
				pl.x = width; // вот тут
			}
		}
		


		pl.move(point(dx*dt, 0)); // двигаем влево или вправо уже по факту сам объект
	}

         // помним, что наш счет уменьшается по мере того, как объект поднимается вверх, и если 
         // объект вдруг спустился ниже, чем его максимальная позиция на определенный уровень, то считаем, что он упал
         // а это значит, что игрок проиграл
	
	if (pl.getPositionS().y > score + 3800 * del) {
		//levelScore = score; // устанавливаем счет уровня (помни же, что в меню это выводится?)
		if (score < oldScore) { // но если текущий счет больше, чем предыдущий
			oldScore = score; // устанавливаем новый рекорд // и сразу его сохраняем
		}
		mainAudio.src = ('audio/main.ogg');
        Money.setPosition(point(math.random(0, width - 200*del*4),0));
        score=0;
        checkBlock=0;
		resCount();
     // ну и так как человек проиграл, выкидываем его в меню
	}

       // при отрисовке персонажа, нам желательно так же следить за ним камерой, ведт постоянно поднимается выше и выше.
	camera.moveTimeC(vector.pointPlus(point(width/2, pl.getPositionC().y), point(0, -500*del)), 10);
};

var resCount = function(){
    if (Countrie == 1){
			return game.startLoop('RussiaRes');
		}
		if (Countrie == 2){
			return game.startLoop('ChinaRes');
		}
}

var winCount = function(){
        if (Countrie == 1){
            Stars();
            if (star==3){
                return game.startLoop('CongRussia3');
            }
            if (star==2){
                return game.startLoop('CongRussia2');
            }
            if (star==1){
                return game.startLoop('CongRussia1');
            }
        }
		if (Countrie == 2){
			Stars();
            if (star==3){
                return game.startLoop('CongChina3');
            }
            if (star==2){
                return game.startLoop('CongChina2');
            }
            if (star==1){
                return game.startLoop('CongChina1');
            }
        }
}

var Stars = function(){
    if (Math.abs(Math.floor(score/100)) >= checkBlock){
        star=3;
    } 
    else if ((Math.abs(Math.floor(score/100)) < checkBlock)&&(Math.abs(Math.floor(score/80)) > checkBlock)){
        star=2;
    }
    else if (Math.abs(Math.floor(score/80)) <= checkBlock){
        star=1;
    }
}