function volume_sphere() {
	 //Write your code here
	let radius=document.getElementById("radius");
	let volume=document.getElementById("volume");
	 radius=radius.value;
	 volume=(4*Math.PI*radius*radius)/3;
	volume.innertext=volume;
	
	
	
	
  
}    
   let submit=document.getElementById("submit");
    submit.addEventListener("click",volume_sphere);

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
