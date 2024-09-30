var back = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/door.png"
});

var Choose = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/choose.png"
});

var Buy = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/$.png"
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
	w : sizeHeroMenu * del, h : sizeHeroMenu * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : hero // путь к картинке
});
var coin = game.newImageObject({
	w : 300 * del, h : 300 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/coin.png" // путь к картинке
});
var coin1 = game.newImageObject({
	w : 300 * del, h : 300 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/coin.png" // путь к картинке
});
var backcoin = game.newImageObject({
	w : 1300 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/txt block.png" // путь к картинке
});
var cost = 0;
Check.setPositionCS(point(width/2, height/4));
next.setPositionCS(point(width/2+width/4, height/4));
prev.setPositionCS(point(width/2-width/4, height/4));
scin.setPositionCS(point(width/2, height/2));
coin.setPositionCS(point(width/15, height/20));
backcoin.setPositionCS(point(width/5, height/20));


var ChooseHero = function () {
	
back.draw();
//Check.draw();
    
    if(keys[st]==true){
        Buy.setPositionCS(point(0, 0));
        Choose.setPositionCS(point(width/2+width/5, height/2+210));
        Choose.draw();
    }
    else{
        Choose.setPositionCS(point(0, 0));
        Buy.setPositionCS(point(width/2+width/5, height/2+210));
        Buy.draw();
    };

next.draw();
prev.draw();
scin.draw();
backcoin.draw();
//coin.draw();

	
 // рисуем персонажа
	

   if (touch.isPeekObject(back)) { // если все-таки нажал
		return game.startLoop('menu'); 
	}
    
    if (touch.isPeekObject(Buy)) { // если все-таки нажал
		if (coins-cost>=0){
            keys[st]=true;
            coins-=cost;
            if (setEff==true){
				coinAudio.src = 'audio/purchase.mp3';
            	coinAudio.Volume = volEff;
            	coinAudio.play();
			}
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
		return game.startLoop('menu'); 
    }
    
    if (keys[st]==false){
	   brush.drawTextS({
		  x : width/3.2, y : height/3, // позиция (будет в самом верху экрана)
		  text : 'Цена:'+Math.abs(cost), // текст
		  size : 300*del, // размер
		  color : '#ffffff',
		  font : 'monospace',
		  fontweight: 'bold'
	   });
    }
    else{
        brush.drawTextS({
		  x : width/3.2, y : height/3, // позиция (будет в самом верху экрана)
		  text : 'Куплено', // текст
		  size : 300*del, // размер
		  color : '#ffffff',
		  font : 'monospace',
		  fontweight: 'bold'
		 
	   });
		 
    }
    
    brush.drawTextS({
		x : width/7, y : height/40, // позиция (будет в самом верху экрана)
		text : Math.abs(coins), // текст
		size : 300*del, // размер
		color : '#ffffff',// цвет
		font : 'monospace',
		fontweight: 'bold'// ш
	});
};

var SwitchHeroPlay = function() {
    switch(st){
        case 1:
                pl = game.newImageObject({w : sizeHero * del, h : sizeHero * del,file:"img/COVID1.png"});   
                break;
        case 2:
                pl = game.newImageObject({w : sizeHero * del, h : sizeHero * del,file:"img/COVID2.png"});
                break;
        case 3:
                pl = game.newImageObject({w : sizeHero * del, h : sizeHero * del,file:"img/COVID3.png"});   
                break;
        case 4:
                pl = game.newImageObject({w : sizeHero * del, h :sizeHero * del,file:"img/COVID4.png"});   
                break;
        case 5:
                pl = game.newImageObject({w : sizeHero * del, h : sizeHero * del,file:"img/COVID5.png"});   
                break;
        case 6:
                pl = game.newImageObject({w : sizeHero * del, h : sizeHero * del,file:"img/COVID6.png"});   
                break;
        case 7:
                pl = game.newImageObject({w : sizeHero * del, h : sizeHero * del,file:"img/COVID7.png"});
                break;
        case 8:
                pl = game.newImageObject({w : sizeHero * del, h :sizeHero * del,file:"img/COVID8.png"});
                break;
        case 9:
                pl = game.newImageObject({w : sizeHero * del, h : sizeHero * del,file:"img/COVID9.png"});   
                break;
        case 10:
                pl = game.newImageObject({w : sizeHero * del, h : sizeHero * del,file:"img/COVID10.png"});   
                break;
    }
}

var SwitchHeroMenu = function() {
    switch(st){
        case 1:
                scin = game.newImageObject({w : sizeHeroMenu * del, h : sizeHeroMenu * del,file:"img/COVID1.png"});
                scin.setPositionCS(point(width/2, height/2));   
                break;
        case 2:
                scin = game.newImageObject({w : sizeHeroMenu * del, h : sizeHeroMenu * del,file:"img/COVID2.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 10;
                break;
        case 3:
                scin = game.newImageObject({w : sizeHeroMenu * del, h : sizeHeroMenu * del,file:"img/COVID3.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 15;    
                break;
        case 4: 
                scin = game.newImageObject({w : sizeHeroMenu * del, h :sizeHeroMenu * del,file:"img/COVID4.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 20;    
                break;
        case 5:
                scin = game.newImageObject({w : sizeHeroMenu * del, h : sizeHeroMenu * del,file:"img/COVID5.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 25;    
                break;
        case 6: 
                scin = game.newImageObject({w : sizeHeroMenu * del, h : sizeHeroMenu * del,file:"img/COVID6.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 30;    
                break;
        case 7:
                scin = game.newImageObject({w : sizeHeroMenu * del, h : sizeHeroMenu * del,file:"img/COVID7.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 35;    
                break;
        case 8:
                scin = game.newImageObject({w : sizeHeroMenu * del, h : sizeHeroMenu * del,file:"img/COVID8.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 40;    
                break;
        case 9:
                scin = game.newImageObject({w : sizeHeroMenu * del, h :sizeHeroMenu * del,file:"img/COVID9.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 45;    
                break;
        case 10:
                scin = game.newImageObject({w : sizeHeroMenu * del, h : sizeHeroMenu * del,file:"img/COVID10.png"});
                scin.setPositionCS(point(width/2, height/2));
                cost = 50;    
                break;
    }
}