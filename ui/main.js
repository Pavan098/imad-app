console.log('Loaded!');
// change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHtml = 'New value';

//move the image
var img =document.getElementById('madi');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 5;
    img.style.marginLeft =marginLeft + 'px';
}
img.onclick = function(){
    var interval =setInterval(moveRight,50);
    
};
//counter code
var button =document.getElementById('counter');
var counter =0;
button.onclick =function(){
  //make a request to counter to end point
  
  //capture the response and store it in a variable
  
  //render the variable in the  correct span
  counter = counter +1;
  var span = document.getElementById('count');
  span.innerHtml = counter.toString();
};