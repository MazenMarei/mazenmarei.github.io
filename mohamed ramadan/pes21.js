document.body.style.backgroundImage= "url('./images/messi.jp')";
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