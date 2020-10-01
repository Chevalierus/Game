//функция для начала игры
function startGame(){
createball();//создане шариков
createhp();//воздание хп
createpoints();//создание очков
    time = setInterval (function() {
	timerBlock.innerText = timerBlock.innerText - 1;
    //условие окончания игры по таймеру
	if(timerBlock.innerText == 0){
    endGame();
    points. innerText = 0
	}
    }, 1000);
timerBlock.innerText = "10"; 
hp.style.display = 'block';
points.style.display = 'block';
startBlock.style.display = 'none';
}
    
//создание шарика
function createball () {
var ball  = document.createElement("div");
ball.id = "ball";
ball.className = "ball";
console.dir(ball);
//рандомное появления шариков
    setTimeout(function() {
    ball.style.top = random(500) + "px";
    ball.style.left = random(750) + "px";
    }, 100);
//функция клика на шарик
    ball.onclick = function() {
    i = i + random(4); //формула прибавления очков
    points.innerText = i;//выведение очков на экран
        if(i >= 15){
        points.innerText = 0;
        endGame();
        }
    //цикл создания шариков
    ball.remove();
    setTimeout(function(){
    var colvoball = random(4);//переменная кол-ва шариков
    var tekkolvoball = 0;//переменная текущего кол-ва шариков
    while(tekkolvoball < colvoball){
    tekkolvoball = tekkolvoball + 1;
    createball();
    }
    }, 200);
    }
igraBlock.appendChild(ball);
}

//функция удаления шариков
function deleteball() {
var balls = document.querySelectorAll(".ball");
console.dir(balls);
    var estshari = 0
    var netsharov = balls.length;
    while (netsharov > 0) {//цикл удаление шаров
    document.querySelector("#ball").remove();
    netsharov = netsharov - 1;
}
}
//создание очков
function createpoints () {
    points = document.createElement("div");//создание элемента span
    points.id = "points";
    igraBlock.appendChild(points);
    points.innerText = 0;
        points.onclick = function(){ //функция сбрасывания очков до 0
        i = 0;
        points.innerText = i;
    }   
}
//создание таймера
function createtimer () {
h2 = document.createElement("div");//создание элемента div
h2.innerText = "Время:";
    timerBlock = document.createElement("span");//создание элемента span
    timerBlock.id = "timerBlock";
    timerBlock.innerText = "10";
    h2.appendChild(timerBlock);
timerBlockade.appendChild(h2);
}
createtimer();
//создание хп
function createhp () {
hp = document.createElement("div");
hp.id = "hp";
console.dir(hp)
    var colvohp = 3;
    var hptek = 0;
//цикл создания очков жизни
    while (hptek < colvohp){
    hpBlock = document.createElement("span");
    hptek = hptek + 1;
    console.dir(hpBlock);
    hp.appendChild(hpBlock);
    }
igraBlock.appendChild(hp);
} 
//функция рандома
function random(max){
    var shar = 1 + Math.random() * (max + 1);
    shar = Math.floor(shar);
    return shar;
}
//функция окончания игры
function endGame(){
clearInterval(time);
i = 0;
points.remove();
hp.remove();
startBlock.style.display = 'block';
    setTimeout(function() {
    deleteball();
    }, 300)
}