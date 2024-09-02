function volume_sphere(e) {
    e.preventDefault();
	 let radius=parseFloat(document.getElementById("radius").value);
     let volume=document.querySelector("#volume");
      if (isNaN(radius) || radius < 0) {
       volume.value="NaN";
    } else {
       
        volume.value=volume.value = parseFloat(((4/3) * Math.PI * Math.pow(radius, 3)).toFixed(4));
    }
    
	 
	
	
	
	
  
}    
  

window.onload = function() {
    document.getElementById('MyForm').onsubmit =function(e) {
        volume_sphere(e);
    }
}
