function volume_sphere() {
	 //Write your code here
	 let radius=parseFloat(document.getElementById("radius").value);
     let volume=document.querySelector("#volume");
      if (isNaN(radius) || radius < 0) {
       volume.value="NaN";
    } else {
       
        volume.value=((4/3) * Math.PI * Math.pow(radius, 3)).toFixed(4);
    }
    
	 
	
	
	
	
  
}    
  

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
}
