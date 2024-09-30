var back = game.newTextObject({
	text : 'Назад', // надпись на объекте
    w : 744 * del, h : 670 * del,
	font : 'serif', // шрифт надписи
	size : 300*del, // размер шрифта (помним про del)
	color : '#363636' // цвет текста
});

var Choose = game.newTextObject({
	text : 'Выбрать', // надпись на объекте
    w : 744 * del, h : 670 * del,
	font : 'serif', // шрифт надписи
	size : 300*del, // размер шрифта (помним про del)
	color : '#363636' // цвет текста
});

var Buy = game.newTextObject({
	text : 'Купить', // надпись на объекте
    w : 744 * del, h : 670 * del,
	font : 'serif', // шрифт надписи
	size : 300*del, // размер шрифта (помним про del)
	color : '#363636' // цвет текста
});

var Check = game.newTextObject({
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
	file : "img/prev.png" // путь к картинке
});
var scin = game.newImageObject({
	w : 744 * del, h : 670 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : hero // путь к картинке
});
var coin = game.newImageObject({
	w : 300 * del, h : 300 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/coin.png" // путь к картинке
});

var cost = 0;
back.setPositionCS(point(width/3, height/2+120));
Check.setPositionCS(point(width/2, height/4));
next.setPositionCS(point(width/2+width/4, height/2));
prev.setPositionCS(point(width/2-width/4, height/2));
scin.setPositionCS(point(width/2, height/2));
coin.setPositionCS(point(width/15, height/20));

var ChooseHero = function () {
	
back.draw();
Check.draw();
    
    if(keys[st]==true){
        Buy.setPositionCS(point(0, 0));
        Choose.setPositionCS(point(width/2+width/5, height/2+120));
        Choose.draw();
    }
    else{
        Choose.setPositionCS(point(0, 0));
        Buy.setPositionCS(point(width/2+width/5, height/2+120));
        Buy.draw();
    };

next.draw();
prev.draw();
scin.draw();
coin.draw();
	
 // рисуем персонажа
	

   if (touch.isPeekObject(Back)) { // если все-таки нажал
		return game.startLoop('menu'); 
	}
    
    if (touch.isPeekObject(Buy)) { // если все-таки нажал
		if (coins-cost>0){
            keys[st]=true;
            coins-=cost;
        }; 
	}
    
	if (touch.isPeekObject(next)) {
        if(st+1==MaxValue+1){st=1;}
        else{st++;}
        SwitchHeroMenu();
    }
    if (touch.isPeekObject(prev)) {
        if(st-1==0){st=MaxValue;}
        else{st--;}
        SwitchHeroMenu();
    }
    
    if (touch.isPeekObject(Choose)){
        SwitchHeroPlay();
    }
    
    if (keys[st]==false){
	   brush.drawTextS({
		  x : width/4.5, y : height/3, // позиция (будет в самом верху экрана)
		  text : 'Стоимость: '+Math.abs(cost), // текст
		  size : 300*del, // размер
		  color : '#515151',// цвет
		  font : 'serif' // шрифт
	   });
    }
    else{
        brush.drawTextS({
		  x : width/3.5, y : height/3, // позиция (будет в самом верху экрана)
		  text : 'Куплено', // текст
		  size : 300*del, // размер
		  color : '#515151',// цвет
		  font : 'serif' // шрифт
	   });
    }
    
    brush.drawTextS({
		x : width/7, y : height/40, // позиция (будет в самом верху экрана)
		text : Math.abs(coins), // текст
		size : 300*del, // размер
		color : '#515151',// цвет
		font : 'serif' // шрифт
	});
};

var SwitchHeroPlay = function() {
    switch(st){
        case 1:
                pl = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec1.png"});   
                break;
        case 2:
                pl = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec2.png"});
                break;
        case 3:
                pl = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec3.png"});   
                break;
        case 4:
                pl = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec4.png"});   
                break;
        case 5:
                pl = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec5.png"});   
                break;
        case 6:
                pl = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec6.png"});   
                break;
        case 7:
                pl = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec7.png"});
                break;
        case 8:
                pl = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec8.png"});
                break;
        case 9:
                pl = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec9.png"});   
                break;
        case 10:
                pl = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec10.png"});   
                break;
    }
}

var SwitchHeroMenu = function() {
    switch(st){
        case 1:
                scin = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec1.png"});
                scin.setPositionCS(point(width/2, height/2));   
                break;
        case 2:
                scin = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec2.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 10;
                break;
        case 3:
                scin = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec3.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 15;    
                break;
        case 4: 
                scin = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec4.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 20;    
                break;
        case 5:
                scin = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec5.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 25;    
                break;
        case 6: 
                scin = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec6.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 30;    
                break;
        case 7:
                scin = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec7.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 35;    
                break;
        case 8:
                scin = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec8.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 40;    
                break;
        case 9:
                scin = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec9.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 45;    
                break;
        case 10:
                scin = game.newImageObject({w : 744 * del, h : 670 * del,file:"img/dudec10.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 50;    
                break;
    }
}