var nextLevRussia = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/nextwin.png"
});

var BackLevRussia = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/door.png"
});

var BackLevRussia1 = game.newImageObject({
	x :width*0.1, y : height/2-height/8,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/menuwin.png"
});

var RestartLevRussia = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/restartwin.png"
});

var Shop = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/shop.png"
});

var level1Russia = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/kal1.png"
});

var level2Russia = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level3Russia = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level4Russia = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level5Russia = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level6Russia = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level7Russia = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level8Russia = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level9Russia = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

var level10Russia = game.newImageObject({
	x :width/5 , y : height/2+180,
	w : 500 * del, h : 500 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/COVID7.png"
});

level1Russia.setPosition(point(width*0.12,height/2));
level2Russia.setPosition(point(width*0.32,height/2));
level3Russia.setPosition(point(width*0.52,height/2));
level4Russia.setPosition(point(width*0.72,height/2));

level5Russia.setPosition(point(width*0.12,height/2+height*0.12));
level6Russia.setPosition(point(width*0.32,height/2+height*0.12));
level7Russia.setPosition(point(width*0.52,height/2+height*0.12));
level8Russia.setPosition(point(width*0.72,height/2+height*0.12));

BackLevRussia.setPosition(point(width*0.12,height/2+height/3.5));
level9Russia.setPosition(point(width*0.32,height/2+height/4.2));
level10Russia.setPosition(point(width*0.52,height/2+height/4.2));
Shop.setPosition(point(width*0.72,height/2+height/3.5));

var Start = function(){
	clearLevel(5);
	createLevel(4);
}

var RussiaLevels = function(){
	level1Russia.draw();
	level2Russia.draw();
	level3Russia.draw();
	level4Russia.draw();
	level5Russia.draw();
	level6Russia.draw();
	level7Russia.draw();
	level8Russia.draw();
	level9Russia.draw();
	level10Russia.draw();
	BackLevRussia.draw();
	Shop.draw();
	
	if (touch.isPeekObject(BackLevRussia)) { // если все-таки нажал
        mainAudio.src = ('audio/main.ogg');
		return game.startLoop('Countries'); 
	}
	
	if (touch.isPeekObject(Shop)) { // если все-таки нажал
        mainAudio.src = ('audio/main.ogg');
		return game.startLoop('Heroes'); 
	}
	

if (touch.isPeekObject(level1Russia)) { 
   setLevelRussia(1, 1, 1000, 100); 
   changeLevelRussia(LevelRussia); 
}  
if (russiaCheck[2]==true){ 
 if (touch.isPeekObject(level2Russia)) { 
   setLevelRussia(1, 2, 2000, 100); 
   changeLevelRussia(LevelRussia); 
  } 
} 
if (russiaCheck[3]==true){ 
 if (touch.isPeekObject(level3Russia)) { 
   setLevelRussia(1, 3, 3000, 100); 
   changeLevelRussia(LevelRussia); 
  } 
} 
if (russiaCheck[4]==true){ 
 if (touch.isPeekObject(level4Russia)) { 
   setLevelRussia(1, 4, 4000, 100); 
   changeLevelRussia(LevelRussia); 
  } 
} 
if (russiaCheck[5]==true){ 
 if (touch.isPeekObject(level5Russia)) { 
   setLevelRussia(1, 5, 5000, 100); 
   changeLevelRussia(LevelRussia); 
  } 
} 
if (russiaCheck[6]==true){ 
 if (touch.isPeekObject(level6Russia)) { 
   setLevelRussia(1, 6, 6000, 100); 
   changeLevelRussia(LevelRussia); 
  } 
} 
if (russiaCheck[7]==true){ 
 if (touch.isPeekObject(level7Russia)) { 
   setLevelRussia(1, 7, 7000, 100); 
   changeLevelRussia(LevelRussia); 
  } 
} 
if (russiaCheck[8]==true){ 
 if (touch.isPeekObject(level8Russia)) { 
   setLevelRussia(1, 8, 8000, 100); 
   changeLevelRussia(LevelRussia); 
  } 
} 
if (russiaCheck[9]==true){ 
 if (touch.isPeekObject(level9Russia)) { 
   setLevelRussia(1, 9, 9000, 100); 
   changeLevelRussia(LevelRussia); 
  } 
} 
if (russiaCheck[10]==true){ 
 if (touch.isPeekObject(level10Russia)) { 
   setLevelRussia(1, 10, 10000, 100); 
   changeLevelRussia(LevelRussia); 
  } 
} 

}

var RussianDied = function(){
	checkBlock = 0;
	BackLevRussia1.setPosition(point(width/4,height/2+height/8));
	RestartLevRussia.setPosition(point(width/2+width/4,height/2+height/8));
	BackLevRussia1.draw();
	RestartLevRussia.draw();
	if (touch.isPeekObject(BackLevRussia1)) 
	{
		BackLevRussia.setPosition(point(width*0.12,height/2+height/3.5));
		Speed = 15;
		return game.startLoop('KalRussia'); 
	}
	if (touch.isPeekObject(RestartLevRussia)){
		changeLevelRussia(LevelRussia);
	}
}

var changeLevelRussia = function(i){
	switch(i){
		case 1:
			Start();
			Speed = 7;
			//hideBlocks;
			return game.startLoop('Russia');
			break;
		case 2:
			Start();
			Speed = 15;
			return game.startLoop('Russia');
			break;
		case 3:
			Start();
			Speed = 15;
			return game.startLoop('Russia');
			break;
		case 4:
			Start();
			Speed = 15;
			return game.startLoop('Russia');
			break;
		case 5:
			Start();
			Speed = 15;
			return game.startLoop('Russia');
			break;
		case 6:
			Start();
			Speed = 15;
			return game.startLoop('Russia');
			break;
		case 7:
			Start();
			Speed = 15;
			return game.startLoop('Russia');
			break;
		case 8:
			Start();
			Speed = 15;
			return game.startLoop('Russia');
			break;
		case 9:
			Start();
			Speed = 15;
			return game.startLoop('Russia');
			break;
		case 10:
			Start();
			Speed = 15;
			return game.startLoop('Russia');
			break;
		
	}
}

var RussiaWin = function(){
	nextLevRussia.setPosition(point(width*0.7,height/2));
    nextLevRussia.draw();
	BackLevRussia1.setPosition(point(width*0.25,height/2));
	BackLevRussia1.draw();
	RestartLevRussia.setPosition(point(width*0.5,height/2));
	RestartLevRussia.draw();
    changeIconLevelRussia();
	if (touch.isPeekObject(BackLevRussia1)) 
	{
        star=0;
		return game.startLoop('KalRussia'); 
	}
    if (touch.isPeekObject(RestartLevRussia)){
		changeLevelRussia(LevelRussia);
	}
    
    if (touch.isPeekObject(nextLevRussia)){
        if (LevelRussia+1 <= MaxLevels){
            changeLevelRussia(LevelRussia+1);
        }
        else{
            return game.startLoop('KalRussia');
        }
    }
}

var setLevelRussia = function (a,b,c,d){
    score=0;
    checkBlock=0;
    Countrie = a;
	LevelRussia = b;
    winScore = c;
    winJump = d;
}

var changeIconLevelRussia = function(){
    if (russiaStars[LevelRussia] < star) {
        russiaStars[LevelRussia] = star;
        if (star==3){
if (LevelRussia==1){ 
          level1Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2, 
                                        file:"img/kal1-3.png"}); 
          level2Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal2.png"}); 
          russiaCheck[2]=true; 
      } 
if (LevelRussia==2){ 
          level2Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal2-3.png"}); 
          level3Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2, 
                                        file:"img/kal3.png"}); 
          russiaCheck[3]=true; 
      } 
if (LevelRussia==3){ 
          level3Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2, 
                                        file:"img/kal3-3.png"}); 
          level4Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2, 
                                        file:"img/kal4.png"}); 
          russiaCheck[4]=true; 
      } 
if (LevelRussia==4){ 
          level4Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2, 
                                        file:"img/kal4-3.png"}); 
          level5Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal5.png"}); 
          russiaCheck[5]=true; 
      } 
if (LevelRussia==5){ 
          level5Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal5-3.png"}); 
          level6Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal6.png"}); 
          russiaCheck[6]=true; 
      } 
if (LevelRussia==6){ 
          level6Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal6-3.png"}); 
          level7Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal7.png"}); 
          russiaCheck[7]=true; 
      } 
if (LevelRussia==7){ 
          level7Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal7-3.png"}); 
          level8Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal8.png"}); 
          russiaCheck[8]=true; 
      } 
if (LevelRussia==8){ 
          level8Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal8-3.png"}); 
          level9Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/4.2, 
                                        file:"img/kal9.png"}); 
          russiaCheck[9]=true; 
      } 
if (LevelRussia==9){ 
          level9Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/4.2, 
                                        file:"img/kal9-3.png"}); 
          level10Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/4.2, 
                                        file:"img/kal10.png"}); 
          russiaCheck[10]=true; 
      } 

            return game.startLoop('CongRussia3');
        }
        if (star==2){
if (LevelRussia==1){ 
          level1Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2, 
                                        file:"img/kal1-2.png"}); 
          level2Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal2.png"}); 
          russiaCheck[2]=true; 
      } 
if (LevelRussia==2){ 
          level2Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal2-2.png"}); 
          level3Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2, 
                                        file:"img/kal3.png"}); 
          russiaCheck[3]=true; 
      } 
if (LevelRussia==3){ 
          level3Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2, 
                                        file:"img/kal3-2.png"}); 
          level4Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2, 
                                        file:"img/kal4.png"}); 
          russiaCheck[4]=true; 
      } 
if (LevelRussia==4){ 
          level4Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2, 
                                        file:"img/kal4-2.png"}); 
          level5Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal5.png"}); 
          russiaCheck[5]=true; 
      } 
if (LevelRussia==5){ 
          level5Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal5-2.png"}); 
          level6Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal6.png"}); 
          russiaCheck[6]=true; 
      } 
if (LevelRussia==6){ 
          level6Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal6-2.png"}); 
          level7Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal7.png"}); 
          russiaCheck[7]=true; 
      } 
if (LevelRussia==7){ 
          level7Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal7-2.png"}); 
          level8Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal8.png"}); 
          russiaCheck[8]=true; 
      } 
if (LevelRussia==8){ 
          level8Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal8-2.png"}); 
          level9Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/4.2, 
                                        file:"img/kal9.png"}); 
          russiaCheck[9]=true; 
      } 
if (LevelRussia==9){ 
          level9Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/4.2, 
                                        file:"img/kal9-2.png"}); 
          level10Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/4.2, 
                                        file:"img/kal10.png"}); 
          russiaCheck[10]=true; 
      }
            return game.startLoop('CongRussia2');
        }
        if (star==1){
if (LevelRussia==1){ 
          level1Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2, 
                                        file:"img/kal1-1.png"}); 
          level2Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal2.png"}); 
          russiaCheck[2]=true; 
      } 
if (LevelRussia==2){ 
          level2Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2, 
                                        file:"img/kal2-1.png"}); 
          level3Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2, 
                                        file:"img/kal3.png"}); 
          russiaCheck[3]=true; 
      } 
if (LevelRussia==3){ 
          level3Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2, 
                                        file:"img/kal3-1.png"}); 
          level4Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2, 
                                        file:"img/kal4.png"}); 
          russiaCheck[4]=true; 
      } 
if (LevelRussia==4){ 
          level4Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2, 
                                        file:"img/kal4-1.png"}); 
          level5Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal5.png"}); 
          russiaCheck[5]=true; 
      } 
if (LevelRussia==5){ 
          level5Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.12, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal5-1.png"}); 
          level6Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal6.png"}); 
          russiaCheck[6]=true; 
      } 
if (LevelRussia==6){ 
          level6Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal6-1.png"}); 
          level7Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal7.png"}); 
          russiaCheck[7]=true; 
      } 
if (LevelRussia==7){ 
          level7Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal7-1.png"}); 
          level8Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal8.png"}); 
          russiaCheck[8]=true; 
      } 
if (LevelRussia==8){ 
          level8Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.72, 
                                        y : height/2+height*0.12, 
                                        file:"img/kal8-1.png"}); 
          level9Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/4.2, 
                                        file:"img/kal9.png"}); 
          russiaCheck[9]=true; 
      } 
if (LevelRussia==9){ 
          level9Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.32, 
                                        y : height/4.2, 
                                        file:"img/kal9-1.png"}); 
          level10Russia = game.newImageObject({w :  500 * del, 
                                        h :  500 * del, 
                                        x : width*0.52, 
                                        y : height/4.2, 
                                        file:"img/kal10.png"}); 
          russiaCheck[10]=true; 
      }
            return game.startLoop('CongRussia1');
        }
    }
}