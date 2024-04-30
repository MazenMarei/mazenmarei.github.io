
class headerBox extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({ mode: 'closed' });
        shadow.innerHTML =
            `
        <header>
            <div class="logo">
                <img src="./images/logo.png">
            </div>
            <div class="logoname">
                <a href="#">uasar</a>
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

        fetch('./style.css')
            .then(response => response.text())
            .then(css => {
                let style = document.createElement('style');
                style.innerHTML = css;
                shadow.appendChild(style);
            });

    }
}

window.customElements.define('header-box', headerBox);

