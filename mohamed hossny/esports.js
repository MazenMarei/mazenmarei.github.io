
let style = document.createElement("style")

style.innerHTML= ` 
body {
    background-size: 100% 50% !important;
    height: 200dvh;
    background: url('./images/background.png');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-color: rgb(60, 60, 82);
    background-blend-mode:overlay;
    overflow-x:hidden
}
`

document.head.appendChild(style)
if(document.querySelector(".icon-image")){
var model = new Custombox.modal({
  content: {
    effect: 'fadein',
    target: '.popup'
  }
});
$(".icon-image").click(function(){
    model.open();
    console.log("click")
})
}
// // slide bar

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
if(next) {
next.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})
}
if (prev) {
    prev.addEventListener('click',function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})
}


// 2ND page animation
        window.addEventListener('scroll', reveal);
        function reveal(){
            var reveals= document.querySelectorAll('.reveal');
            if(!reveals || reveals.length < 1) return
            for(var i=0; i <reveals.length;i++){
                var windowheight=window.innerHeight;
                var revealtop=reveals[i].getBoundingClientRect().top;
                var revealpoint=200;
                if(revealtop < windowheight - revealpoint){
                    reveals[i].classList.add('active');
                }else{
                    reveals[i].classList.remove('active');
                }
            }
        }

