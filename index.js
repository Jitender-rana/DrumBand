var numberofDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonclicked=this.innerHTML;
        makesound(buttonclicked);
        animate(buttonclicked);        

        
        
    });
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    animate(event.key);
})
function makesound(key){
    switch(key){
        case "a":
            var audio =new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "s":
            var audio =new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "d":
            var audio =new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "f":
            var audio =new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "g":
            var audio =new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "h":
            var audio =new Audio("./sounds/crash.mp3");
            audio.play();
            
            
            break;
        case "j":
            var audio =new Audio("./sounds/kick-bass.mp3");
            audio.play();
            
            break;
        
            
        
  
        
    }
}
function animate(key){
    var activebutton = document.querySelector("."+key);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },200);
}