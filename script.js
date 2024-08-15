function volume_sphere() {
	 //Write your code here
	 let radius=parseFloat(document.getElementById("radius").value);
     let volume=document.getElementById("volume");
      if (isNaN(radius) || radius < 0) {
       vol.innerText="NaN";
    } else {
       
        volume.innerText=((4/3) * Math.PI * Math.pow(radius, 3)).toFixed(4);
    }
    
	 
	
	
	
	
  
}    
  

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
