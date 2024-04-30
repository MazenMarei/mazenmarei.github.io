document.body.style.backgroundImage= "url('./images/messi.jpg')";
let style = document.createElement('style');

// Add CSS rules to the style element
style.innerHTML = `
    body::before {
        content: "";
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url('path/to/your/image.jpg') no-repeat center center fixed; 
        background-size: cover;
        z-index: -1;
        backdrop-filter: blur(10px);
    }
`;document.head.appendChild(style);
document.getElementById("image1").addEventListener("click",function(){
    document.body.style.backgroundImage= "url('./images/messi.jpg')";
})
document.getElementById("image2").addEventListener("click",function(){
    document.body.style.backgroundImage= "url('./images/Spike.jpeg')";
})
document.getElementById("image3").addEventListener("click",function(){
    document.body.style.backgroundImage= "url('./images/MADDEN24.jpg ')";
})
document.getElementById("image4").addEventListener("click",function(){
    document.body.style.backgroundImage= "url('./images/NBA2K24.jpeg')";
})
document.getElementById("image6").addEventListener("click",function(){
    document.body.style.backgroundImage= "url('./images/0_23.jpg')";
})
document.getElementById("image5").addEventListener("click",function(){
    document.body.style.backgroundImage= "url('./images/maxresdefault.jpg')";
})



const controller=new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}}); // class conteractor b7ot ablha new
const scene=new ScrollMagic.Scene({triggerElement:'.main-section'}).addTo(controller).setClassToggle(".main-section section", "active-section")

let no = document.getElementById('name');
let opn = document.getElementById('opinion');
let sub = document.getElementById('submit');
let error_name = document.getElementById('error_name');
let error_opinion = document.getElementById('error_opinion');

sub.onclick = function(e) {
    // Reset error messages
    error_name.innerText = "";
    error_opinion.innerText = "";
    
    // Flag to determine whether to save to localStorage
    let saveToLocalStorage = true;
    
    // Check if name is empty
    if (no.value === "") {
        error_name.innerText = "Name cannot be empty!!";
        e.preventDefault();
        saveToLocalStorage = false;
    }
    // Check if first letter of name is uppercase
    else if (!(no.value[0] === no.value[0].toUpperCase())) {
        error_name.innerText = "Name must start with an uppercase letter!!";
        e.preventDefault();
        saveToLocalStorage = false;
    }
    
    // Check if opinion is empty
    if (opn.value === "") {
        error_opinion.innerText = "Opinion cannot be empty!!";
        e.preventDefault();
        saveToLocalStorage = false;
    }
    
    // Store name in localStorage if both name and opinion are provided and name starts with an uppercase letter
    if (saveToLocalStorage) {
        window.localStorage.setItem("name", no.value);
        window.localStorage.setItem("opinion", opn.value);
    }
}


