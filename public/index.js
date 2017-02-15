
var imageMap;

var centreLat = 0;
var centreLng = 0;

// positive latitude is East and negative latitude is West.
// positive longitude is North and negative longitude is South.
// Chennai: 13.0827° N, 80.2707° E
var latitude = 31.2304;
var longitude = 121.4737;

var zoom = 1;

function preload() {
    //The static map has a dark theme, focuses on (0,0), has a zoom level of 1 and an angle of inclination of 0. It also has canvas size 1024 * 512
    imageMap = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v8/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiYWFrYXNoa2lzaGFuIiwiYSI6ImNpejVzNDVnNjA2c20yeG80OXVhYXE1N3YifQ.AP2ZisBS-81PNXKvR9yCdg');
}

function setup() {
    //The Resolution we get from the static map is 600 * 600.
    createCanvas(1024, 512);
    //Translate to the centre of the map because all directions can be represented on cartesian co-ordinates.
    // translate( width / 2, height / 2);
    //To centralize the imageMap.
    // imageMode(CENTER);
    image(imageMap, 0, 0);

    //Setup the Data Visualization.
    var centreX = webMercatorX(centreLng);
    var centreY = webMercatorY(centreLat);

    //These are the coordiantes of the Earthquake Data representation.
    var coordX = webMercatorX(longitude) - centreX;
    var coordY = webMercatorY(latitude) - centreY;

    fill(255, 0, 255, 200);
    ellipse(centreX, centreY, 20, 20);

}

//The below function is to calculate the mercator equivalent of longitudes.
//The formula for that is gotten from https://en.wikipedia.org/wiki/Web_Mercator.
//The 128 in the formula represents the midpoint of the webMercatorX. MapBox uses 512 resolution,Hence 256 is the midpoint.
//Lambda is the longitude. 
function webMercatorX(longitude) {
    //Convert it to radians from degrees.
    longitude = radians(longitude);
    var a = (256  / Math.PI) * (pow(2, zoom));
    var b = longitude + Math.PI;
    return a * b;
}

//The below function is to calculate the mercator equivalent of latitudes.
//The formula for that is gotten from https://en.wikipedia.org/wiki/Web_Mercator. 
//The 128 in the formula represents the midpoint of the webMercatorY. MapBox uses 512 resolution,Hence 256 is the midpoint.
//Phi is the latitude. 
function webMercatorY(latitude) {
    //Convert it to radians from degrees.
    latitude = radians(latitude);
    var a = (256 / Math.PI) * (pow(2, zoom));
    var b = tan( Math.PI / 4 + latitude / 2);
    var c = Math.PI - log(b);
    return a * c;
}



// function draw() {

// }