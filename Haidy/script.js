

let img = document.getElementById("0");
let imgArray = [
    "thinkingimages/two0.png",
    "thinkingimages/two1.png",
    "thinkingimages/two2.png",
    "thinkingimages/two3.png",
    "thinkingimages/two4.png",
    "thinkingimages/two5.png",
    "thinkingimages/two6.png"
];

let imgIndex = 0;

function slideShow() {  
    img.setAttribute("src", imgArray[imgIndex]);
    imgIndex++;
    if (imgIndex === imgArray.length) {
        imgIndex = 0;
    }
}

setInterval(slideShow, 1000);
