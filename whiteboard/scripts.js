let canvas = document.getElementById("canvas");
let menu = document.getElementById("menu");
let rubber = document.getElementById("erase");
let eraser;
let fix = true;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let color_name = document.getElementById("c").value;
let size = document.getElementById("s").value;


let ctx = canvas.getContext('2d');


function erase(){
    
    if(fix == true)
    {
        canvas.classList.add("cursor");
        fix = false;
        eraser = true;
        document.getElementById("erase").style.backgroundColor = "red";
    }
    else if(fix == false)
    {
        canvas.classList.remove("cursor");
        fix = true;
        eraser = false;
        document.getElementById("erase").style.backgroundColor = "white";
    }

    
    
}
function startDraw(){
    drawing = true;

}
function stopDraw(){
    drawing = false;
    ctx.beginPath();
    
}

function clearAll(){
    window.location.reload();
}


function Draw(e){

    
    if(!drawing) return;
    
    if(eraser == true)
    {
    //     size = document.getElementById("s").value;
    //     color_name = document.getElementById("c").value;

        color_name = "white";
        size = document.getElementById("s").value;
    }
    
    else
    {
        size = document.getElementById("s").value;
        color_name = document.getElementById("c").value;
        
        // color_name = "white";
        // size = document.getElementById("s").value;
    }
    
    ctx.strokeStyle = color_name;

    ctx.lineWidth = size;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY-138);
    ctx.moveTo(e.clientX, e.clientY-138);
    ctx.stroke();

}


menu.addEventListener("mouseover", stopDraw);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousedown", Draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mousemove", Draw);