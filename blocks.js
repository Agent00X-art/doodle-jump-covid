// массив с блоками, изначально пустой
var blocks = [];


// позже задействуем, тут будет храниться расстояние между последним и новым блоком
dy2 = false;

// а вот и функция createBlock для создания одного бока (добавляет его после последнего)
var createBlock = function () {
	if (dy2 === false) {dy2 = height/8;} else 
	{ dy2 = blocks[blocks.length-1].y - 500*del -
					math.random(500*del, 800*del);
		dy3 = dy2;
	}
	blocks.push(game.newImageObject({ // пушим новый блок в массив
		w : 170 * del*4, h : 60 * del*4, // размеры
		file : 'img/block1.png', // картинка для блока
		x : math.random(0, width - 200*del*4), // по горизонтали располагаем его рандомно
		y : dy2, // по высоте используем посчитанное ранее значение
	}));
};

// определим переменную для хранения последнего блока
// последним будет считаться блок, которые последним был перемещен наверх
var oldBlock;

// а вот и функция создания уровня, вы ведь ее уже расскомментировали? Как где? Там где кнопка "Новая игра"
var createLevel = function (i) { // аргументом передаем количество блоков для игры
	pl.y = dy-100;//так как мы создаем уровень сначала, то и игрока поставим в ноль
	pl.x =width/2;
	score = 0; // обнулим текущий счет
	OOP.forInt(i, function () { // запустим цикл по созданию блоков
		createBlock(); // и просто вызовем функцию нужное количество раз
	});
	oldBlock = blocks[blocks.length-1] // запомним какой блок был создан последним, последний - значит самый верхний (ЭТО ВАЖНО)
};

// как только блок окажется очень сильно внизу, мы перекинем его наверх, чтобы не создавать новых
var rePositionBlock = function (el) { // тут принимаем, какой именно блок будем перекидывать
	var x = math.random(0, width - 200*del*4),
// генерируем рандомно его позицию по горизонтали
			y = oldBlock.y - 500*del - // обращаем внимание на oldBlock, это последний телепортированный наверх блок
					math.random(500*del, 800*del); // а вот тут снова рандом, который прибавится к его высоте
	el.setPosition(point(x, y));
	dy3=x;// и перепозиционируем блок наверх
	oldBlock = el; // так как теперь этот бок выше последнего, он сам становится последним (самым высоким)
};

// функция отрисовки всех блоков и проверки столкновения плеера с ними
var drawLevel = function () {

        // стартуем цикл по блокам
	OOP.forArr(blocks, function (el) {
		PositionCoin();
		Money.draw();

                // проверим, не оказался ли блок сильно внизу 
		if (camera.getPosition().y + height-height/hideBlocks< el.y) { rePositionBlock(el); }

		el.draw(); // обязательно отрисуем

                // теперь проверка на столкновение с игроком, если столкнулся
		if (pl.isStaticIntersect(el.getStaticBox()) && dy > 0) { // причем при столкновении учитываем, что он должен падать вниз
			if (pl.y-pl.h/3 < el.y+el.h) // возьмем нижнюю позицию нашего игрока, и проверим,  выше ли она одной трети от верха нашего блока, чтобы отталкивался он только если ноги выше центра
                
				if (setEff==true){
					jumpAudio.Volume = volEff;
                	jumpAudio.play();
				}
				checkBlock++;
				dy = -50*del; // установим силу, двигающую объект
		}
	});
};
var rePositionBlockDown = function (el) { // тут принимаем, какой именно блок будем перекидывать
	var x = math.random(0, width - 200*del*4), // генерируем рандомно его позицию по горизонтали
			y =-1*(oldBlock.y - 500*del - math.random(500*del, 800*del)); 
	el.setPosition(point(x, y)); // и перепозиционируем блок наверх
	oldBlock = el; // так как теперь этот бок выше последнего, он сам становится последним (самым высоким)
};
var clearLevel = function () {

        // стартуем цикл по блокам
	OOP.forArr(blocks, function (el) {
                // проверим, не оказался ли блок сильно внизу 
		if (camera.getPosition().y + height-height/12> el.y) { rePositionBlockDown(el); }

		el.draw(); // обязательно отрисуем

                // теперь проверка на столкновение с игроком, если столкнулся
		
	});
};