function increase(){
    var myImg = document.getElementById("hai2");
    var currWidth = myImg.clientWidth;
    if(currWidth == 250){
        alert("Maximum zoom-in level reached.");
    } 
    else{
        myImg.style.width = (currWidth + 50) + "px";
    } 
}
function decrease()
{
    var myImg = document.getElementById("hai2");
    var currWidth = myImg.clientWidth;
    if(currWidth == 50)
    {
        alert("Maximum zoom-out level reached.");
    } else
    {
        myImg.style.width = (currWidth - 50) + "px";
    }
}
function max(){
    document.getElementById("hai2").style.borderRadius="10%";
    
}

function min(){
    document.getElementById("hai2").style.borderRadius="50%";
    
}


