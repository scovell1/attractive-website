


function respond(){alert("see what I mean!");}

function changeColor(event){
    var colorArray = [];
    for (var i = 0;i < 3;i++){
        colorArray[i] =  Math.round(Math.random()*255)
    }
    myRGB =  'rgb(' + colorArray[0] + ',' +  colorArray[1] + ',' +  colorArray[2] + ')'
    event.target.style.color = myRGB;
}

window.onload=function(){
  document.getElementById("responsive").addEventListener("mouseover", respond, false);
  document.getElementById("colors").addEventListener("mouseover", changeColor, false);
}
