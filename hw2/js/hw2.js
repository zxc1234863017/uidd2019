var a = document.getElementById('start');
var x = 11 , step = 0.05;
var direct = 1;

a.onmouseenter = function()
{
	changeStart();
};

a.onmouseover = function()
{
	direct = 1;
	step *= direct;
	trainMove();
};

a.onmouseleave = function()
{
	changeStart();
	direct = -1;
	step *= direct;
	trainMove();
};

function trainMove()
{
	console.log("haha");
	var currentTr = document.getElementById('train');
	currentTr.style.left = x + "vw";
	
	x += step;
	console.log(x);
	if(x <= 15 && x >= 10)
	{
		setTimeout("trainMove()",1);
		return;
	}
}

function changeStart()
{
	//console.log("yes");
	if (start.src.match("blue"))
	{
		start.src = "./image/start_yellow.png";
	}
	else
	{
	  start.src = "./image/start_blue.png";
	}
}