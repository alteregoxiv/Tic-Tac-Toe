function startGame(){
	box = document.getElementsByTagName('input');
	names = localStorage.names.split(',');
	symbols = localStorage.symbols.split(',');
	plr = document.getElementsByClassName('p');
	plr[0].innerHTML = names[0];	
	plr[1].innerHTML = names[1];
	turn = 1;
	sym = document.getElementById("butt");
	
	sym.innerHTML = "PUT " + symbols[0];
	plr[0].style.background = "rgb(255,127,80)";
	cur = names[0];
	console.log(cur)
}

var box , names , plr , turn , sym , tb = null , cur , b;

function starto(){
	if(tb == null)
		alert("Choose a box to put your INPUT..........");
	
	if(tb.value!=="")
		return;
	
	tb.value = sym.innerHTML[sym.innerHTML.length-1];
	
	turn += 1;
	
	if(turn%2==0){
		plr[1].style.background = "rgb(255,127,80)";
		plr[0].style.background = "none";
		sym.innerHTML = "PUT " + symbols[1];
		cur = names[1];
		b = 0;
		console.log(cur);
	}	
	else{
		plr[0].style.background = "rgb(255,127,80)";
		plr[1].style.background = "none";
		sym.innerHTML = "PUT " + symbols[0];
		cur = names[0];
		b = 1;
		console.log(cur);
	}
	
	tb = null;
	
	if(turn>9){
		alert("DRAW..........");
		sym.style.display = 'none';
		plr[0].style.display = 'none';
		plr[1].style.display = 'none';
		document.getElementsByClassName('final')[0].style.display = 'block';
	}
	
	if(turn>4)
		if(check()){
			alert("WINNER :- "+names[b]);
			sym.style.display = 'none';
			plr[0].style.display = 'none';
			plr[1].style.display = 'none';
			// box.style.cssFloat = "left";
			document.getElementsByClassName('final')[0].style.display = 'block';
		}
}

function check(){
	var c = false;
	
	c = c + eq(box[0] , box[1] , box[2]) + eq(box[3] , box[4] , box[5])+ eq(box[6] , box[7] , box[8]) + eq(box[0] , box[3] , box[6]) + eq(box[1] , box[4] , box[7]) + eq(box[2] , box[5] , box[8]) + eq(box[0] , box[4] , box[8]) + eq(box[2] , box[4] , box[6])
	
	return c;
}


function eq(a , b , c){
	if(a.value==b.value && b.value==c.value && b.value!==""){
		a.style.color = 'red';
		b.style.color = 'red';
		c.style.color = 'red';
		
		a.style.background = 'black';
		b.style.background = 'black';
		c.style.background = 'black';
		
		return true;
	}
	else
		return false;
}

function gobak(){
	window.location.assign("index.html");
}