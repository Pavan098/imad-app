console.log('Loaded!');
// change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHtml = 'New value';

//move the image
var img =document.getElementById('madi');
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft + 10;
    img.style.marginLeft =marginLeft + 'px';
}
img.onclick = function(){
    var interval =setInterval(moveright,100);
    
};
