
	var numsquares=6;
	var colors= [];
    var pickedcolor;
    var squares=document.querySelectorAll(".square");
	var messagedisplay=document.querySelector("#message");
	var h1=document.querySelector("h1");
	var resetbutton=document.querySelector("#reset");
	var modebuttons=document.querySelectorAll(".mode");
	init();

	function init(){
		setupmodebuttons();
		setupsquares();

	
	reset();
} 

function setupmodebuttons(){
	for(var i=0;i<modebuttons.length;i++){
		    modebuttons[i].addEventListener("click",function(){
			modebuttons[0].classList.remove("selected");
			modebuttons[1].classList.remove("selected");
			this.classList.add("selected");

	 		this.textContent ==="Easy" ? numsquares=3:numsquares=6;
			reset();
			
	        });
	    }
}


function setupsquares(){
		for(var i=0;i<squares.length;i++){
		//add click listeners to alla the squares
		   squares[i].addEventListener("click",function(){
		   // grab the color of picked square
		   var clickedcolor=this.style.background;
		   //compare color of pickedcolor
		   if(clickedcolor===pickedcolor ){
		   	messagedisplay.textContent="Correct";
		   	resetbutton.textContent="Play Again?";
		   	changecolors(clickedcolor);
		   	h1.style.background=clickedcolor;

		   }
		   else
		   {
		   	this.style.background="#232323";
		   	messagedisplay.textContent="Try Again";
		   }
		});

	}
}

function reset(){
		//generate new colours
		colors= generateRandomColors(numsquares);
		//pick a new random colour from array
		pickedcolor=pickcolor();
		//change displayed colour to match picked colour
		colordisplay.textContent=pickedcolor;
		resetbutton.textContent="New Colors"
	    messagedisplay.textContent="";

		//change the colours of squares
		for(var i=0;i<squares.length;i++){
			if(colors[i]){
			squares[i].style.display="block"
			squares[i].style.background=colors[i];
		}
		else {
			squares[i].style.display="none";
		}
		}
	h1.style.background="steelblue";


	}

	// easybtn.addEventListener("click",function(){
	// 	easybtn.classList.add("selected");
	// 	hardbtn.classList.remove("selected"); 
	// 	numsquares=3;
	// 	colors=generateRandomColors(numsquares);
	// 	pickedcolor= pickcolor();
	// 	colordisplay.textContent=pickedcolor;
	// 	for( var i=0; i < squares.length; i++) {
	// 		if(colors[i]) {
	// 			squares[i].style.background=colors[i]; 
	// 		}
	// 		else{
	// 			squares[i].style.display="none";
	// 		}
	// 	}


	// });


	// hardbtn.addEventListener("click",function(){
	// 	hardbtn.classList.add("selected");
	// 	easybtn.classList.remove("selected");
	// 	numsquares=6;
	// 	colors=generateRandomColors(numsquares);
	// 	pickedcolor= pickcolor();
	// 	colordisplay.textContent=pickedcolor;
	// 	for( var i=0; i < squares.length; i++) {
	// 			squares[i].style.background=colors[i]; 
	// 			squares[i].style.display="block";
			
	// 	}      
	// });


	resetbutton.addEventListener("click",function(){
		reset();
	});

	

	function changecolors(color){

		for(var i=0;i<colors.length;i++)

		squares[i].style.background=color;
	}
	function pickcolor(){
		var random = Math.floor(Math.random()*colors.length);
		return colors[random];

	}

	function generateRandomColors(num){
		var arr=[];
		for(var i=0; i<num; i++){
			//get random color and push it into array
			arr.push(randomColor());

		}

		return arr;
	}

	function randomColor(){
		//pick red from 0 to 255
		var r = Math.floor(Math.random()*256);
		//pick green from 0 to 255
		var g =Math.floor(Math.random()*256);
		//pick blue from 0 to 255
		var b =Math.floor(Math.random()*256);
		return "rgb("+ r +", "+ g +", "+ b +")";
	}

