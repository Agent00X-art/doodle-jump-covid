var BackSettings =  game.newImageObject({
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/door.png" // путь к картинке
});


var Effect = game.newImageObject({
		x: width/2.5, y: height/4.4,
		w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/soundON.png" 
});

var Background = game.newImageObject({
	x: width/2.5, y: height/2,
		w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/melodyOn.png" 
});

BackSettings.setPositionCS(point(width/2, height/2+120));

Effect.setPositionCS(point(width/2, height/4));

Background.setPositionCS(point(width/2, height/2));

var Settings = function () {
	
BackSettings.draw();
Effect.draw();

Background.draw();

	
 // рисуем персонажа
	
	if (touch.isPeekObject(Effect)){
		if (setEff==true){
			setEff = false;
			Effect = game.newImageObject({x: width/2.4, y: height/5, w : 500 * del, h : 500 * del,file:"img/SoundOff.png"});
		}
		else {
			Effect = game.newImageObject({x: width/2.4, y: height/5, w : 500 * del, h : 500 * del,file:"img/SoundON.png"});
			setEff = true;
		}
    }
	
	if (touch.isPeekObject(Background)){
		if (setBack==true){
			mainAudio.src = ('');
			setBack = false;
			Background = game.newImageObject({x: width/2.4, y: height/2.3, w : 500 * del, h : 500 * del,file:"img/melodyOff.png"});
		}
		else{
			mainAudio.src = ('audio/main.ogg');
			setBack = true;
			Background = game.newImageObject({x: width/2.4, y: height/2.3, w : 500 * del, h : 500 * del,file:"img/melodyON.png"});
		}
    }
   if (touch.isPeekObject(BackSettings)) { // если все-таки нажал
		return game.startLoop('menu'); 
	}
    
	brush.drawTextS({
		x : 30, y : 10, // позиция (будет в самом верху экрана)
		text : 'Лучший счёт: '+(Math.abs(score)), // текст
		size : 300*del, // размер
		color : '#515151',// цвет
		font : 'serif' // шрифт
	});										   
};