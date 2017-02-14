
var mapimg;

function preload() {
    //The static map has a dark theme, focuses on (0,0), has a zoom level of 1 and an angle of inclination of 0. It also has canvas size 1024 * 512
    mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiYWFrYXNoa2lzaGFuIiwiYSI6ImNpejVzNDVnNjA2c20yeG80OXVhYXE1N3YifQ.AP2ZisBS-81PNXKvR9yCdg');
}

function setup() {
    //The Resolution we get from the static map is 600 * 600.
    createCanvas(1024, 512);
    image(mapimg, 0, 0);

}

function draw() {

}