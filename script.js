function volume_sphere() {
	 //Write your code here
	 let radius=parseFloat(document.getElementById("radius").value);
     let vol=document.getElementById("volume");
      if (isNaN(radius) || radius < 0) {
       vol.innerText="NaN";
    } else {
        let volume = (4/3) * Math.PI * Math.pow(radius, 3);
        vol.innerText=volume.toFixed(4);
    }
    
	 
	
	
	
	
  
}    
  

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
