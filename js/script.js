
$(document).ready(function(){

var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];
var option = '';
for (var i=0;i<cities.length;i++){
   option += '<option value="'+ cities[i] + '">' + cities[i] + '</option>';
}
$('#city-type').append(option);

$('#city-type').change(changeBackground);

function changeBackground(){
    event.preventDefault();
// var image = ['images/citipix_skyline.jpg','images/nyc.jpg','images/sf.jpg','images/la.jpg','images/austin.jpg','images/sydney.jpg'];
    
    //Get user input
    var city = $('#city-type').val();

//if user selects city NYC, change background to ny.jpg   
    if (city == 'NYC') {
       $('body').css('background-image',"url('images/nyc.jpg')");
        console.log('change image to nyc');
    } else if (city == 'SF') {
       $('body').css('background-image',"url('images/sf.jpg')");
        console.log('change image to sf');
    } else if (city == 'LA') {
       $('body').css('background-image',"url('images/la.jpg')");
        console.log('change image to la');  
    } else if (city == 'ATX') {
       $('body').css('background-image',"url('images/austin.jpg')");
        console.log('change image to atx');      
    } else if (city == 'SYD') {
       $('body').css('background-image',"url('images/sydney.jpg')");
        console.log('change image to syd'); 
    } else {
        $('body').css('background-image',"url('images/citipix_skyline.jpg')");
        console.log('do nothing');
    } 
    
}       

});