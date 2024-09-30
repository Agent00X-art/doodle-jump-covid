var Money = game.newImageObject({
	w : 300 * del, h : 300 * del, // размеры. У меня картинка размером 744 на 670, потом я ее сильно уменьшу
	file : "img/coin.png" // путь к картинке
});

var PositionCoin = function() {
    if (camera.getPosition().y + height-height/12< Money.y) {
        var x = math.random(0, width - 200*del*4),
			y = camera.getPosition().y - math.random(0, height);
        Money.setPosition(point(x,y));
    }
    if (pl.isStaticIntersect(Money.getStaticBox())){
        var x = math.random(0, width - 200*del*4),
			y = camera.getPosition().y - math.random(0, height);
        Money.setPosition(point(x,y));
        if (setEff==true){
			coinAudio.src = 'audio/takeCoin.mp3';
        	coinAudio.Volume = volEff;
        	coinAudio.play();
		}
        coins++
    }
}