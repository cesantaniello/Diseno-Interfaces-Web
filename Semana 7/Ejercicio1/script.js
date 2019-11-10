var div = document.getElementById("slider"),
    img = div.getElementsByTagName("img"),
    total = img.length,
    i = 0,
    slider = function(){
        img[i].style.opacity = 0;
        i = i == total - 1 ? 0 : ++i;
        img[i].style.opacity = 1;
    },
    interval = null;
 
img[i].style.opacity = 1;
 
div.addEventListener("mouseover", function(){
    slider();
    interval = setInterval(slider, 1500);
}, false);
 
div.addEventListener("mouseout", function(){
    clearInterval(interval);
});