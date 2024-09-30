var BackLevChina = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/door.png"
});

var BackLevChina1 = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/menuwin.png"
});

var nextLevChina = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/nextwin.png"
});

var RestartLevChina = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/restartwin.png"
});
var Shop = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/shop.png"
});

var level1China = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/kal1.png"
});

var level2China = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level3China = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level4China = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level5China = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level6China = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level7China = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level8China = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level9China = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level10China = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

level1China.setPosition(point(width*0.12,height/2));
level2China.setPosition(point(width*0.32,height/2));
level3China.setPosition(point(width*0.52,height/2));
level4China.setPosition(point(width*0.72,height/2));

level5China.setPosition(point(width*0.12,height/2+height*0.12));
level6China.setPosition(point(width*0.32,height/2+height*0.12));
level7China.setPosition(point(width*0.52,height/2+height*0.12));
level8China.setPosition(point(width*0.72,height/2+height*0.12));

BackLevChina.setPosition(point(width*0.12,height/2+height/3.5));
level9China.setPosition(point(width*0.32,height/2+height/4.2));
level10China.setPosition(point(width*0.52,height/2+height/4.2));
Shop.setPosition(point(width*0.72,height/2+height/3.5));

var Start = function(){
	clearLevel(5);
	createLevel(4);
}

var ChinaLevels = function(){
	level1China.draw();
	level2China.draw();
	level3China.draw();
	level4China.draw();
	level5China.draw();
	level6China.draw();
	level7China.draw();
	level8China.draw();
	level9China.draw();
	level10China.draw();
	BackLevChina.draw();
	Shop.draw();
	
	if (touch.isPeekObject(BackLevChina)) { // если все-таки нажал
        mainAudio.src = ('audio/main.ogg');
		return game.startLoop('Countries'); 
	}
	
	if (touch.isPeekObject(Shop)) { // если все-таки нажал
        mainAudio.src = ('audio/main.ogg');
		return game.startLoop('Heroes'); 
	}
	
	if (touch.isPeekObject(level1China)) { // если все-таки нажал
		setLevelChina(2, 1, 1000, 100);
		changeLevelChina(LevelChina);
	}
	
	if (chinaCheck[2]==true){
        if (touch.isPeekObject(level2China)) { // если все-таки нажал
            setLevelChina(2, 2, 2000, 100);
            changeLevelChina(LevelChina);
        }
    }
	
    if (chinaCheck[3]==true){
	   if (touch.isPeekObject(level3China)) { // если все-таки нажал
		  setLevelChina(2, 3, 3000, 100);
		  changeLevelChina(LevelChina);
	   }
    }
        
	if (chinaCheck[4]==true){
	   if (touch.isPeekObject(level4China)) { // если все-таки нажал
		  setLevelChina(2, 4, 4000, 100);
		  changeLevelChina(LevelChina);
	   }
    }
	
    if (chinaCheck[5]==true){
	   if (touch.isPeekObject(level5China)) { // если все-таки нажал
		  setLevelChina(2, 5, 5000, 100);
		  changeLevelChina(LevelChina);
	   }
    }
	
    if (chinaCheck[6]==true){
	   if (touch.isPeekObject(level6China)) { // если все-таки нажал
		  setLevelChina(2, 6, 6000, 100);
		  changeLevelChina(LevelChina);
	   }
    }
	
    if (chinaCheck[7]==true){
	   if (touch.isPeekObject(level7China)) { // если все-таки нажал
		  setLevelChina(2, 7, 7000, 100);
		  changeLevelChina(LevelChina);
	   }
    }
	
	if (chinaCheck[8]==true){
        if (touch.isPeekObject(level8China)) { // если все-таки нажал
		  setLevelChina(2, 8, 8000, 100);
		  changeLevelChina(LevelChina);
	   }
    }
	
    if (chinaCheck[9]==true){
	   if (touch.isPeekObject(level9China)) { // если все-таки нажал
		  setLevelChina(2, 9, 9000, 100);
		  changeLevelChina(LevelChina);
	   }
    }
        
	if (chinaCheck[10]==true){
	   if (touch.isPeekObject(level10China)) { // если все-таки нажал
            setLevelChina(2, 10, 10000, 100);
            changeLevelChina(LevelChina);
	   }
    }
}

var ChinaDied = function(){
	checkBlock = 0;
	BackLevChina1.setPosition(point(width/4,height/2+height/8));
	BackLevChina1.draw();
	RestartLevChina.setPosition(point(width/2+width/4,height/2+height/8));
	RestartLevChina.draw();
	if (touch.isPeekObject(BackLevChina1)) 
	{
		BackLevChina1.setPosition(point(width*0.12,height/2+height/3.5));
		return game.startLoop('KalChina'); 
	}
	if (touch.isPeekObject(RestartLevChina)){
		changeLevelChina(LevelChina);
	} 
}

var changeLevelChina = function(i){
	switch(i){
		case 1:
			Start();
			Speed = 7;
			return game.startLoop('China');
			break;
		case 2:
			Start();
			Speed = 15;
			return game.startLoop('China');
			break;
		case 3:
			Start();
			Speed = 15;
			return game.startLoop('China');
			break;
		case 4:
			Start();
			Speed = 15;
			return game.startLoop('China');
			break;
		case 5:
			Start();
			Speed = 15;
			return game.startLoop('China');
			break;
		case 6:
			Start();
			Speed = 15;
			return game.startLoop('China');
			break;
		case 7:
			Start();
			Speed = 15;
			return game.startLoop('China');
			break;
		case 8:
			Start();
			Speed = 15;
			return game.startLoop('China');
			break;
		case 9:
			Start();
			Speed = 15;
			return game.startLoop('China');
			break;
		case 10:
			Start();
			Speed = 15;
			return game.startLoop('China');
			break;
		
	}
}

var ChinaWin = function(){
    nextLevChina.setPosition(point(width*0.7,height/2));
    nextLevChina.draw();
	BackLevChina1.setPosition(point(width*0.25,height/2));
	BackLevChina1.draw();
	RestartLevChina.setPosition(point(width*0.5,height/2));
	RestartLevChina.draw();
    changeIconLevelChina();
	if (touch.isPeekObject(BackLevChina1)) 
	{
        star=0;
		return game.startLoop('KalChina'); 
	}
    if (touch.isPeekObject(RestartLevChina)){
		changeLevelChina(LevelChina);
	}
    
    if (touch.isPeekObject(nextLevChina)){
        if (LevelChina+1 <= MaxLevels){
            changeLevelChina(LevelChina+1);
        }
        else{
            return game.startLoop('KalChina');
        }
    }
}

var setLevelChina = function (a,b,c,d){
    score=0;
    checkBlock=0;
    Countrie = a;
	LevelChina = b;
    winScore = c;
    winJump = d;
}

var changeIconLevelChina = function(){
    if (chinaStars[LevelChina] < star) {
        chinaStars[LevelChina] = star;
        if (star==3){
if (LevelChina==1){ 
          level1China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2, 
                                        file:"img/kal1-3.png"}); 
          level2China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal2.png"}); 
          chinaCheck[2]=true; 
      } 
if (LevelChina==2){ 
          level2China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal2-3.png"}); 
          level3China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2, 
                                        file:"img/kal3.png"}); 
          chinaCheck[3]=true; 
      } 
if (LevelChina==3){ 
          level3China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2, 
                                        file:"img/kal3-3.png"}); 
          level4China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2, 
                                        file:"img/kal4.png"}); 
          chinaCheck[4]=true; 
      } 
if (LevelChina==4){ 
          level4China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2, 
                                        file:"img/kal4-3.png"}); 
          level5China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal5.png"}); 
          chinaCheck[5]=true; 
      } 
if (LevelChina==5){ 
          level5China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal5-3.png"}); 
          level6China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal6.png"}); 
          chinaCheck[6]=true; 
      } 
if (LevelChina==6){ 
          level6China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal6-3.png"}); 
          level7China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal7.png"}); 
          chinaCheck[7]=true; 
      } 
if (LevelChina==7){ 
          level7China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal7-3.png"}); 
          level8China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal8.png"}); 
          chinaCheck[8]=true; 
      } 
if (LevelChina==8){ 
          level8China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal8-3.png"}); 
          level9China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/4.2, 
                                        file:"img/kal9.png"}); 
          chinaCheck[9]=true; 
      } 
if (LevelChina==9){ 
          level9China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/4.2, 
                                        file:"img/kal9-3.png"}); 
          level10China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/4.2, 
                                        file:"img/kal10.png"}); 
          chinaCheck[10]=true; 
      } 
 
            return game.startLoop('CongChina3');
        }
        if (star==2){
if (LevelChina==1){ 
          level1China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2, 
                                        file:"img/kal1-2.png"}); 
          level2China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal2.png"}); 
          chinaCheck[2]=true; 
      } 
if (LevelChina==2){ 
          level2China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal2-2.png"}); 
          level3China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2, 
                                        file:"img/kal3.png"}); 
          chinaCheck[3]=true; 
      } 
if (LevelChina==3){ 
          level3China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2, 
                                        file:"img/kal3-2.png"}); 
          level4China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2, 
                                        file:"img/kal4.png"}); 
          chinaCheck[4]=true; 
      } 
if (LevelChina==4){ 
          level4China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2, 
                                        file:"img/kal4-2.png"}); 
          level5China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal5.png"}); 
          chinaCheck[5]=true; 
      } 
if (LevelChina==5){ 
          level5China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal5-2.png"}); 
          level6China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal6.png"}); 
          chinaCheck[6]=true; 
      } 
if (LevelChina==6){ 
          level6China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal6-2.png"}); 
          level7China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal7.png"}); 
          chinaCheck[7]=true; 
      } 
if (LevelChina==7){ 
          level7China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal7-2.png"}); 
          level8China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal8.png"}); 
          chinaCheck[8]=true; 
      } 
if (LevelChina==8){ 
          level8China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal8-2.png"}); 
          level9China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/4.2, 
                                        file:"img/kal9.png"}); 
          chinaCheck[9]=true; 
      } 
if (LevelChina==9){ 
          level9China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/4.2, 
                                        file:"img/kal9-2.png"}); 
          level10China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/4.2, 
                                        file:"img/kal10.png"}); 
          chinaCheck[10]=true; 
      }
            return game.startLoop('CongChina2');
        }
        if (star==1){
if (LevelChina==1){ 
          level1China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2, 
                                        file:"img/kal1-1.png"}); 
          level2China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal2.png"}); 
          chinaCheck[2]=true; 
      } 
if (LevelChina==2){ 
          level2China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal2-1.png"}); 
          level3China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2, 
                                        file:"img/kal3.png"}); 
          chinaCheck[3]=true; 
      } 
if (LevelChina==3){ 
          level3China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2, 
                                        file:"img/kal3-1.png"}); 
          level4China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2, 
                                        file:"img/kal4.png"}); 
          chinaCheck[4]=true; 
      } 
if (LevelChina==4){ 
          level4China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2, 
                                        file:"img/kal4-1.png"}); 
          level5China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal5.png"}); 
          chinaCheck[5]=true; 
      } 
if (LevelChina==5){ 
          level5China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal5-1.png"}); 
          level6China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal6.png"}); 
          chinaCheck[6]=true; 
      } 
if (LevelChina==6){ 
          level6China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal6-1.png"}); 
          level7China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal7.png"}); 
          chinaCheck[7]=true; 
      } 
if (LevelChina==7){ 
          level7China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal7-1.png"}); 
          level8China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal8.png"}); 
          chinaCheck[8]=true; 
      } 
if (LevelChina==8){ 
          level8China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal8-1.png"}); 
          level9China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/4.2, 
                                        file:"img/kal9.png"}); 
          chinaCheck[9]=true; 
      } 
if (LevelChina==9){ 
          level9China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/4.2, 
                                        file:"img/kal9-1.png"}); 
          level10China = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/4.2, 
                                        file:"img/kal10.png"}); 
          chinaCheck[10]=true; 
      }
            return game.startLoop('CongChina1');
        }
    }
}