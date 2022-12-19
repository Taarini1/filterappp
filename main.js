function preload(){

}

function setup(){
    canvas=createCanvas(650,700);
    canvas.position(110,400);
    video=createCapture(VIDEO);
    video.hide();

    tint_color = ""
}

function draw(){

    image(video,0,0,400,500);

    tint(tint_color);
}

function take_snapshot(){
    save("filter_selfie.png");
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}


