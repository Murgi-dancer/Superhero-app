var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var block_image_weight = 30;

var block_image_height = 30;

var player_object = "";
var block_image_object = "";


function player_update() {
    fabric.Image.fromURL("player.png",
        function(Img) {
            player_object=Img

            player_object.scaleToWidth(150);
            player_object.scaleToHeight(150);
            player_object.set({
                top: player_y,
                left: player_x,


            });
            canvas.add(player_object);
        });
}








function new_image(get_image) {
    fabric.Image.fromURL(get_image,
        function(Img) {
block_image_object=Img
            block_image_object.scaleToWidth(block_image_weight);
            block_image_object.scaleToHeight(block_image_height);
            block_image_object.set({
                top: player_y,
                left: player_x,


            });
            canvas.add(block_image_object);;
        });
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed)



    if (e.shiftKey == true && keyPressed == '80') {
        block_image_weight = block_image_weight + 10
        block_image_height = block_image_height + 10
        document.getElementById("current_width").innerHTML = block_image_weight
        document.getElementById("current_height").innerHTML = block_image_height





    }


    if (e.shiftKey == true && keyPressed == '77') {
        block_image_weight = block_image_weight - 10
        block_image_height = block_image_height - 10
        document.getElementById("current_width").innerHTML = block_image_weight
        document.getElementById("current_height").innerHTML = block_image_height





    }



    if (keyPressed == '38') { up(); console.log("up"); }
    if (keyPressed == '40') { down(); console.log("down"); }
    if (keyPressed == '37') { left(); console.log("left"); }
    if (keyPressed == '39') { right(); console.log("right"); }




    if (keyPressed == '87') { new_image("wall.jpg"); console.log("wall"); }
    if (keyPressed == '71') { new_image("ground.png"); console.log("ground"); }
    if (keyPressed == '68') { new_image("dark_green.png"); console.log("dark"); }
    if (keyPressed == '82') { new_image("roof.jpg"); console.log("roof"); }

    if (keyPressed == '67') { new_image("cloud.jpg"); console.log("cloud"); }
    if (keyPressed == '78') { new_image("light_green.png"); console.log("light"); }
    if (keyPressed == '84') { new_image("trunk.jpg"); console.log("trunk"); }
    if (keyPressed == '85') { new_image("unique.png"); console.log("unique"); }


    
    if (keyPressed == '89') { new_image("yellow_wall.png"); console.log("yellow_wall"); }














}

function up(){
if( player_y>0){
player_y= player_y-block_image_height
console.log("block_image_height"+block_image_height)
console.log("When up arrow key is pressed then X="+player_x + "Y="+player_y)
canvas.remove(player_object)
player_update()
}
}
function left(){
if( player_x>0){
player_x= player_x-block_image_height
console.log("block_image_height"+block_image_height)
console.log("When up arrow key is pressed then X="+player_x + "Y="+player_y)
canvas.remove(player_object)
player_update()
}
}
function down(){
if( player_y<600){
player_y= player_y+block_image_height
console.log("block_image_height"+block_image_height)
console.log("When up arrow key is pressed then X="+player_x + "Y="+player_y)
canvas.remove(player_object)
player_update()
}
}

function right(){
if( player_x<800){
player_x= player_x+block_image_height
console.log("block_image_height"+block_image_height)
console.log("When up arrow key is pressed then X="+player_x + "Y="+player_y)
canvas.remove(player_object)
player_update()
}
}


