// var url='http://api.openweathermap.org/data/2.5/weather?q=London&appid=eedf376d354bb8e856c0eeb272de048b';
const content=$('#content');
// function url(name){
//     var url='http://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=eedf376d354bb8e856c0eeb272de048b';
    
//     theData(url);
// }


$(document).ready(function(){
    $('.new').on('click',function(){
        let name =$('.search').val();
        console.log(name);
    
    $.ajax({
        type: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=eedf376d354bb8e856c0eeb272de048b',
        dataType: 'json',
        data:{units:'metric'},
        beforeSend: function(xhr){
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType("application/json");
            }
          },
        success: function(data) {
            
           console.log(data);
        var output='';
        $.each(data.weather, function(index,val){
           output+='<div><h1>'+data.name+'</h1></b><h2>'+data.weather[0].main+'</h2><p></b>Humidity</p><p>'+data.main.humidity+'&#x00025</p><p></b>Temperature</p><p>'+data.main.temp+'&degC</p><p></b>Wind speed</p>'+data.wind.speed+'</div>';
           console.log(output);
           $(content).html(output);
        })
const chartData = [data.main.humidity, data.main.temp, data.wind.speed];

const colors = d3.scaleLinear()
	.domain([0, d3.max(chartData)])
	.range(['#418ff4', '#f44286']);
	
const tooltip = d3.select('body')
				.append('div')
				
				.style('color', '#000000')
				.style('font-size', '12px')
				.style('font-family', 'Arial, sans-serif')
				.style('padding', '2px 8px')
				.style('position', 'absolute')
				
			
const chart = d3.select('#content2')
				.append('svg')
				.attr('height', '100%')
				.attr('width', '100%');
let paddingX = 300;	
chart.selectAll("circle")
        .data(chartData)
        .enter().append("circle")
        .attr("class", "circle")
        .attr("cx", function(d, i){ paddingX+=(d+40)*3+(i*20); return paddingX; })
        .style("stroke", "black")
        .style("fill", "white")
        .attr("cy", function(d, i){return (d+40)+20; })
        .attr("r", function(d) { return (d+40); })
			
		.on('mouseover', function(d) {
				tooltip.transition().duration(200)
				tooltip.html(d)
						.style('left', d3.event.layerX-20 + 'px')
						.style('top', d3.event.layerY-20 + 'px');
                
                d3.select(this)
                
				.transition()
                .duration(1000)
                .attr("transform", "translate(-200,0)scale(1.2)")
                .style('opacity', .2) 
                .style('fill', 'red') 
      
			})
			
			.on('mouseout', function(d) {
				tooltip.transition().duration(500)
                d3.select(this)
                .transition()
                .delay(100)
                .attr("transform", "scale(1)")
                .style('opacity', 1)
                .style('fill', 'red') 
			});
           
              


        },
        error: function() {
            // window.alert('Failed');
        }
    });
})
});

//Navigation part
var $active_elements = $('section');
var $window = $(window);
console.log('test');
function active() {
console.log('active');
  var window_bottom = ($window.scrollTop() + $window.height());
 
  $.each($active_elements, function() {
    var $element = $(this);
    var element_bottom = ($element.offset().top + $element.outerHeight());
 
    //check to see if this current container is within viewport
    if ((element_bottom >= $window.scrollTop()) &&
        ($element.offset().top <= window_bottom)) {
      $element.addClass('active');
    } else {
      $element.removeClass('active');
    }
  });
}

$window.on('scroll resize', active);
$window.trigger('scroll');

$('.nav--icon').on('click', function(){
  $(this).toggleClass('nav-open');
  $('.overlay').toggleClass('open');
});

$('.button').on('click', function(){
    $(this).toggleClass('button-open');
    $('.search-bar2').toggleClass('open');
  });



//   let foto,foto1;

//   function setup() {
//     foto=loadImage("img/hehehe.png");
//     foto.resize(width, height);
//     // size(800, 800,P3D);
//     createCanvas(800, 800, WEBGL);
//     background(foto);
//     foto1=loadImage("img/IMG_8303.jpeg");
//     foto1.resize(width, height);
//   }
  
//   function draw() {
//     background(255);
//     translate(width/2, height/2, -400);
//     push();
//     rotateX(0.);
//     rotateY(map(touchX, 0, width, -PI, PI));
//     rotateZ(0.);
//     for (i = 0; i < foto.width; i=i+5) {
//       for (j = 0; j < foto.height; j=j+5) {
//         let c = foto.pixels[j*foto.width+i];
//         let br = brightness(foto.pixels[j*foto.width+i]);
//         let br2 = brightness(foto1.pixels[j*foto1.width+i]);
//         fill(c-touchY/8-1);
//         //fill(c);
//         noStroke();
//         push();
//         translate(i-width/2, j-height/2, map(touchY,0,height,br,br2/2));  // brightness controls z-displacement
//         box(3, 3, 15);
//         pop();
//       }
//     }
//     pop();
//   }

//   let foto,foto1;

//   foto = document.querySelector('.foto');

//   function setup() {
//     foto.src = "img/hehehe.png";
//     foto.resize(width, height);
//     // size(800, 800,P3D);
//     createCanvas(800, 800, WEBGL);
//     background(foto);
//     foto1.loadImage("img/IMG_8303.jpeg");
//     foto1.resize(width, height);
//   }
  
//   function draw() {
//       var canvas = document.querySelector('canvas');
//       var canvas = canvas.getContext('2d');
//     canvas.background(255);
//     canvas.translate(width/2, height/2, -400);
//     canvas.push();
//     rotateX(0);
//     rotateY(map(touchX, 0, width, -PI, PI));
//     rotateZ(0.);
//     for (i = 0; i < foto.width; i=i+5) {
//       for (j = 0; j < foto.height; j=j+5) {
//         let c = foto.pixels[j*foto.width+i];
//         let br = brightness(foto.pixels[j*foto.width+i]);
//         let br2 = brightness(foto1.pixels[j*foto1.width+i]);
//         fill(c-touchY/8-1);
        
//         noStroke();
//         push();
//         translate(i-width/2, j-height/2, map(touchY,0,height,br,br2/2));  // brightness controls z-displacement
//         box(3, 3, 15);
//         pop();
//       }
//     }
//     pop();
//   }
