var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city='New York';
var apiKey = '&appid=eedf376d354bb8e856c0eeb272de048b';
var units='&units=metric';


function setup() {
    
    createCanvas(windowWidth, windowHeight);
    var button = select('#submit');
    button.mousePressed(weatherAsk);

    input = select('#city');

}
function weatherAsk(){
    var url=  api+input.value()+apiKey+units;
    loadJSON(url, gotData);
}
function gotData(data){
    weather=data;
}

function draw() {
	background(255,0,0);
	if(weather){
        var temp=weather.main.temp;
        var humidity=weather.main.humidity;
        rect(200,200,10,temp);
        rect(200,400,10,humidity);
        var icon=weather.weather.icon;
        background(icon);
    }
}