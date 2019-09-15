i = 1;
picCount = 9;

function change(imgs) {
  var expandImg = document.getElementById("slide");
  expandImg.src = imgs.src;
 
}
function next(){
	i++;
	var expandImg = document.getElementById("slide");
	if(i > picCount){	
		i = 1;
	}	
	expandImg.src = "images/"+"b" + i + ".jpg";
	
	
	
}
function prev(){
	i--;
	var expandImg = document.getElementById("slide");
	if(i < 1){
		
		i = picCount;
		
	}
	expandImg.src = "images/"+"b" + i + ".jpg";
	
	
	
}

