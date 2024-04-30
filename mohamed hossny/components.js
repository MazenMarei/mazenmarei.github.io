
class headerBox extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML =
            `
        <style>
        
header {
    width: 100%;
    background-color: #0C0B2D;
    height: 75px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    position: fixed;
    align-items: center;
    perspective: 1000px;
    z-index: 1000;
}
.logo {
    width: 5%;
    align-content: center;

}
.logo img {
    margin: 0;
    padding: 0;
    height: 60px;

}
.logoname {
    align-content: center;
    top : -7px;
    left: -0.6%;
    position: relative;
    font-size: 60px;
    font : bold;
    margin: 0;
    padding: 0;
    background: linear-gradient(90deg, rgb(244, 24, 148) , rgb(240, 16, 42)); 
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.logoname p {

    margin: 10% 0;
    padding: 0;
    text-decoration: none;
}
.menu {
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-left: 120px;
    padding: 0;
}
.menu ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
}
.menu ul li {
    margin: 0;
    padding: 0;
    transition: transform 0.5s;
}


.menu ul li a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin: 0 20px;
    padding: 0;
    transition: transform 1s;
}
.menu ul li a:hover {
    text-shadow: 0px 0px 5px rgb(99, 148, 255);
}
.menu ul li:hover {
    transform: scale(1.1);
}
.login, .signup{
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
}




.login,.signup {
    align-items: center;
    padding: 0;
    height: fit-content;
    border: solid 4px;
    border-radius: 10px;
    border-image: linear-gradient(90deg, rgb(244, 24, 148) , rgb(240, 16, 42)) 1; 
    margin: 10px;
    cursor: pointer;
    margin-right: 30px;
    transition: transform 1s;
}

.login a , .signup a {
    color: white;
    font-size: 25px;
    font-weight: bold;
    border: none;
    padding: 5px 0px;
    margin: 0;
    text-decoration: none;
}

.login:hover, .signup:hover {
    transform:scale(1.05);
}
        </style>
        <header>
            <div class="logo">
                <img src="./images/logo.png">
            </div>
            <div class="logoname">
                <p href="#">uasar</p>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="login">
                <a href="www.google.com">Login</a>
            </div>

            <div class="signup">
                <a href="www.youtube.com">Sign up</a>
            </div>
        </header>
        `;


    }
}

window.customElements.define('header-box', headerBox);

