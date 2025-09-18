let btn = document.querySelector("body");
btn.addEventListener('click',function(e){
    let x = e.clientX;
    let y = e.clientY;
    
    let tag = document.createElement("span");
    tag.style.position = "absolute";
    tag.style.left = x + "px";
    tag.style.top = y + "px";

    document.body.appendChild(tag);
    
    setTimeout(function(){
        tag.remove();
    },1000);
});