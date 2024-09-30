var Back = game.newTextObject({
	text : 'назад', // надпись на объекте
	font : 'serif', // шрифт надписи
	size : 300*del, // размер шрифта (помним про del)
	color : '#363636' // цвет текста
});
var Choose = game.newTextObject({
	text : 'Выбери героя', // надпись на объекте
	font : 'serif', // шрифт надписи
	size : 300*del, // размер шрифта (помним про del)
	color : '#363636' // цвет текста
});
var next = game.newImageObject({
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/next.png" // путь к картинке
});
var prev = game.newImageObject({
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/next.png" // путь к картинке
});
var scin = game.newImageObject({
	w : 744 * del, h : 670 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : hero // путь к картинке
});

Back.setPositionCS(point(width/2, height/2+120));
Choose.setPositionCS(point(width/2, height/2-120));
next.setPositionCS(point(width/2+80, height/2));
prev.setPositionCS(point(width/2-80, height/2));
scin.setPositionCS(point(width/2, height/2));
    
var ChooseHero = function () {
	
Back.draw();
Choose.draw();
next.draw();
prev.draw();
scin.draw();
	
 // рисуем персонажа
	
		
   if (touch.isPeekObject(Back)) { // если все-таки нажал
		return game.startLoop('menu'); 
	}
	if(st<0){st=1}
	if(st>1){st=0}
	if (touch.isPeekObject(next)) {
        st++;
        scin = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec.png"});
        pl = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec.png"});
        scin.setPositionCS(point(width/2, height/2));

    }
    if (touch.isPeekObject(prev)) {
        st--
        pl = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/1222.png"});
        scin = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/1222.png"});
        scin.setPositionCS(point(width/2, height/2));

    }
    
	brush.drawTextS({
		x : 10, y : 10, // позиция (будет в самом верху экрана)
		text : 'st: '+Math.abs(st), // текст
		size : 300*del, // размер
		color : '#515151',// цвет
		font : 'serif' // шрифт
	});										   
};

	
	
	
	
	


    
    