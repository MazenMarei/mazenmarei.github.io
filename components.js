
class headerBox extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML =
            `
        <style>
        .newTheme {
            border-image: linear-gradient(90deg, #263238, #263238) 1 !important;
            color: wheat !important;
            background-image: linear-gradient(90deg, #263238, #263238) 1 !important;
            -webkit-text-fill-color: wheat !important;
            text-shadow: 0 0 3px black;
            }
            .newThemediv {
                background-color: #aad3d3 !important;
                box-shadow: 0px 0px 50px 5px rgb(0 0 0 / 70%);

            }
header {
    width: 98%;
    background-color: #0C0B2D;
    height: 75px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    position: fixed;
    align-items: center;
    perspective: 1000px;
    z-index: 2;
    margin-top: .5%;
    margin-left: 1%;
    box-shadow: 0px 0px 50px 5px rgba(255, 255, 255, 0.1);

}

/* scroll up */
.scrollUp{
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 40px;
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1;
    transition: all 0.5s ease;
}
.scrollUp:hover , .themebtn:hover{
    transform: scale(1.1);
    background-color: rgba(245, 245, 220, 0.573);
}
.themebtn {
    position: fixed;
    bottom: 70px;
    right: 20px;
    width: 40px;
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1;
    transition: all 0.5s ease; 
}
.logo {
    width: 6%;
    position: relative;
    height: 100%;
    margin-top: 1%;
    background-image: url('./images/logo.png');
    background-size: 80px 60px;
    background-repeat: no-repeat;
}

.logoname {
    align-content: center;
    top : -7px;
    left: -10px;
    position: relative;
    font-size: 60px;
    font : bold;
    margin: 0;
    padding: 0;
    background: linear-gradient(90deg, rgb(244, 24, 148) , rgb(240, 16, 42)); 
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.logoname a {

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


.menu ul li a ,.genres{
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin: 0 20px;
    padding: 0;
    transition: transform 1s;
    cursor: pointer;
}
.menu ul li a:hover,.genres:hover {
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

.genres-dropdown{
    position: absolute;
    padding: 10px;
    background-color: #111;
    top: 110%;
    left: 50%;
    width: 10%;
    height: fit-content;
    margin: auto;
    border-radius: 4px;
    box-shadow: 0 14px 35px 0 rgba(9,9,12,0.4);
    z-index: 1;
    display: none;
    box-shadow: 0px 0px 50px 5px rgba(255, 255, 255, 0.1);
}

.genres-dropdown::after{
    position: absolute;
    top: -7px;
    left: 30px;
    width: 0; 
    height: 0; 
    border-left: 8px solid transparent;
    border-right: 8px solid transparent; 
    border-bottom: 8px solid #111;
    content: '';
    display: block;
    z-index: 1;
    transition: all 200ms linear;
}

.gerna-menueoption {
    padding: 10px;
    background-color: #111;
    color: white;
    border-radius: 4px;
    margin: 5px;
    cursor: pointer;
}
.gerna-menueoption a {
    text-decoration: none;
    color: white;
}

.gerna-menueoption:hover {
    background-color: #ffffff81;
}
.gernras {
    pointer: cursor;
    pointer-events: none;
}

        </style>
        
        <header id="header-box">
            <div class="logo">
            </div>
            <div class="logoname">
                <a href="./index.html">uasar</a>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./about-us.html">About Us</a></li>
                    <li class="genres"><a href="#" onClick= "">Genres &dtrif;</a></li>
                    <div class="genres-dropdown">
                    <div class="gerna-menueoption">
                        <a href="./mohamed ashraf/action.html">Action</a>
                    </div>
                    <div class="gerna-menueoption">
                        <a href="./mohamed fathy/newindex.html">Adventure</a>
                    </div>
                    <div class="gerna-menueoption">
                        <a href="./hassan/it finn.html">Horror</a>
                    </div>
                    <div class="gerna-menueoption">
                        <a href="./mohamed ramadan/sport.html">Sport</a>
                    </div>
                    <div class="gerna-menueoption">
                        <a href="./mohamed hossny/esports.html">Esport</a>
                    </div>
                    <div class="gerna-menueoption">
                        <a href="./Haidy/page2.html">Pazzel</a>
                    </div>
                    <div class="gerna-menueoption">
                        <a href="./mohamed yousry/SimMain.html">Simulation</a>
                    </div>
                    </div>
                    <li><a href="./index.html#contact">Contact Us</a></li>
                </ul>
            </div>
            <div class="login">
                <a href="./login.html">Login</a>
            </div>

            <div class="signup">
                <a href="./signup.html">Sign up</a>
            </div>
        </header>
        <div class="themebtn" id="themebtn" onclick="changeTheme ()">
        Theme
    </div>
    <div class="scrollUp">
        Scroll
    </div>
        `;

        let header = this.shadowRoot.querySelector('header');
        let genresDropdown = this.shadowRoot.querySelector('.genres-dropdown');
        let scroll = this.shadowRoot.querySelector('.scrollUp');
        header.addEventListener('click', (e) => {
           
            if(e.target.matches('.genres a')) {
                $(genresDropdown).slideToggle()
             } else {
                if ($(genresDropdown).css('display') !='none')   $(genresDropdown).slideToggle()

            }
        });
        window.addEventListener('click', (e) => {
            if (!e.target.matches('header-box')) {
                if ($(genresDropdown).css('display') !='none')  $(genresDropdown).slideToggle()
            }  
        });

        if($(scroll)) {
            $(scroll).click(function(e) {
                $('section').animatescroll({scrollSpeed:1000,easing:'easeOutBounce'});
                
            });
          }

        // window.addEventListener('scroll', () => {
        //     if (genresDropdown.style.display =='none') return;
        //     $(genresDropdown).slideToggle()
        // });
    }
}

class footerBox extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML =
            `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

            <style>
            .newTheme {
                border-image: linear-gradient(90deg, #263238, #263238) 1 !important;
                color: wheat !important;
                background-image: linear-gradient(90deg, #263238, #263238) 1 !important;
                -webkit-text-fill-color: wheat !important;
                text-shadow: 0 0 3px black;
    
                }
                .newThemediv {
                    background-color: #aad3d3 !important;
                
                }
footer {
    width: 98%;
    height: 25vh;
    background-color:#0C0B2D;
    margin: auto;
    margin-top: 1%;
    margin-bottom: 1%;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    transform: translateY(30px);
    opacity: 0;
}

.footerSeaction {
    width: 25%;
    height: 100%;
    color: white;
}
.footerSeaction h3 {
    margin: 10% 0;
    color: white;
}
.copyRight {
    padding: 0;
    margin: 5%;
    display: flex;
    flex-direction: row;
    color: white;
}
.copyRight img {
    height: 50px; 
}

.footerLinks {
    padding: 0;
    display: flex;
    flex-direction: column;
    color: white;
}
.underline {
    border-bottom: solid rebeccapurple;
    width: 25%;
}
.footerLinks  ul {
    list-style: none;
}
.footerLinks ul li {
    margin-left: -8%;
}
.footerLinks ul li:not(:last-child){
    margin-bottom: 5px;
}
.footerLinks ul li a{
font-size: 20px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: block;
  transition: all 0.5s ease;
  width: 0%;
}
.footerLinks ul li a:hover{
    color: #ffffff;
    transform: translateX(10px);
}
.mycopy {
    justify-content: center;
    text-align: center;
    color: rgb(133, 70, 197);
}

.Social ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-left: -8%;
}

.Social ul li a {
    display: inline-block;
    height: 30px;
    width: 30px;
    background-color: rgba(255,255,255,0.2);
    margin:0 10px 10px 0;
    text-align: center;
    line-height: 33px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
}

.Social ul li a:hover {
    background-color: #ffffff;
    color: #24262b;
}
.animatedFooter {
    transform: translateY(0);
    transition: all 1s ease;
    opacity: 1;
}
svg{
    width: 30px;
    height: 30px;
 
}

            </style>

            <footer id="footer-box">
    <div class="footerSeaction">
        <div class="copyRight">
            <img src="./images/logo.png" alt="" srcset="">
            <p>&copy; 2021 Quasar. All rights reserved.</p>
        </div>
    </div>
    <div class="footerSeaction">
        <div class="footerLinks">
            <div class="underline"><h3>Links</h3></div>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about-us.html">About</a></li>
                <li><a href="./index.html#genres_fillter_cont">Services</a></li>
                <li><a href="./index.html#contact">Contact</a></li>
            </ul>
        </div>
       <div class="mycopy">
        <p>
            &copy; Mazen's IT-TEAM.
        </p>
       </div>
    </div>
    <div class="footerSeaction">
        <div class="Social">
            <div class="underline">
                <h3>Follow us</h3>
            </div>
            <ul>
                <li><a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                </a></li>
                <li><a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                </a></li>
                <li><a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                </a></li>
                <li><a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                    </svg>
                </a></li>
            </ul>
        </div>
    </div>
</footer>
            `;
        this.scrollingAnimation();
    }


    scrollingAnimation() {
        window.addEventListener('scroll', () => {
            var footer = this.shadowRoot.querySelector('footer');
            var windowheight = window.innerHeight;
            var footertop = footer.getBoundingClientRect().top;
            if (footertop < windowheight - 50) {
                footer.classList.add('animatedFooter');
            } else {
                footer.classList.remove('animatedFooter');
            }
        });
    }
}

window.customElements.define('footer-box', footerBox);
window.customElements.define('header-box', headerBox);

