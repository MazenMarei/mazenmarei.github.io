let  dataBase = [
  {
    email : "admin@admin.com",
    password : "admin"
  },
  {
    email : "user@user.com",
    password : "user"
  }
];
localStorage.setItem("dataBase", JSON.stringify(dataBase));


if(document.getElementsByClassName("container")[0]) {
    let sliderCopy = document.getElementsByClassName("container")[0].cloneNode(true);
    document.getElementsByClassName("main-slider-container")[0].innerHTML = sliderCopy.innerHTML + sliderCopy.innerHTML + sliderCopy.innerHTML;
}    

if(document.querySelector(".our-gernes")) {
  let controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .15} });
    let scene = new ScrollMagic.Scene({triggerElement: ".aboutus-nextpage", duration: 1000}).setClassToggle(".our-gernes", "active-gerne").addTo(controller);
}   



if($(".price-table")) {
  let controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 0.8} });
    let scene = new ScrollMagic.Scene({triggerElement: ".pricing_seaction", duration: 600}).setClassToggle(".price-table", "single-table").addTo(controller);
}

if($(".getnow-btn")) {
  $(".getnow-btn").click(function(e) {
    window.location.href = "login.html";
  })
}

if($("#signup-form")) {
  $("#signup-form").submit(function(e) {
    e.preventDefault();
    let email = $("#Email").val();
    let password = $("#password").val();
    let FirstName = $("#firstname").val();
    let LastName = $("#lastname").val();
    if(!FirstName || !LastName || !email || !password) { 
      $(".wrongdata p")[0].innerHTML = "Please Fill All Fields";
      $(".wrongdata").css("display", "flex");
      setTimeout(() => {
        $(".wrongdata").fadeOut()
      }, 10000);
      return
    }
    if(!isValidEmail(email)) { 
      $(".wrongdata p")[0].innerHTML = "Invalid Email Format";
      $(".wrongdata").css("display", "flex");
      setTimeout(() => {
        $(".wrongdata").fadeOut()
      }, 10000);
      return 
    }
    let data = JSON.parse(localStorage.getItem("dataBase"));
    let user = data.find(user => user.email === email);
    if(user) {
      $(".wrongdata p")[0].innerHTML = "User Already Exist";
      $(".wrongdata").css("display", "flex");
      $(".wrongdata").css("top", "22%");
      setTimeout(() => {
        $(".wrongdata").fadeOut()
      }, 10000);
    } else {
      data.push({email, password});
      localStorage.setItem("newData", JSON.stringify(data));
      window.location.href = "login.html";
    }
  })
}

if($("#login-form")) {
  $("#login-form").submit(function(e) {
    e.preventDefault();
    let email = $("#Email").val();
    let password = $("#password").val();
    if(!email || !password) {
      $(".wrongdata p")[0].innerHTML = "Please Fill All Fields";
      $(".wrongdata").css("display", "flex");
      setTimeout(() => {
        $(".wrongdata").fadeOut()
      }, 10000);
      return
    }
    if(!isValidEmail(email)) { 
      $(".wrongdata p")[0].innerHTML = "Invalid Email Format";
      $(".wrongdata").css("display", "flex");
      setTimeout(() => {
        $(".wrongdata").fadeOut()
      }, 10000);
      return 
    }
    let dataBase = localStorage.getItem("newData") ? JSON.parse(localStorage.getItem("newData")) : JSON.parse(localStorage.getItem("dataBase"));
    let user = dataBase.find(user => user.email === email && user.password === password);
    if(user) {
      localStorage.setItem("LoggedIn", true)
      window.location.href = "index.html";
    } else {
      $(".wrongdata p")[0].innerHTML = "Wrong Email or Password";
      localStorage.setItem("LoggedIn", false)
      $(".wrongdata").css("display", "flex");
      setTimeout(() => {
        $(".wrongdata").fadeOut()
      }, 10000);
    }
  })
}
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
if($("#icon-cross")) {
  $("#icon-cross").click(function(e) {
    $(".wrongdata").fadeOut();
  })
}

if($(".genres_fillter_cont")) {
  let slectedGenre = document.querySelector(".gerne-slected");

  let controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .8} });
  let scene = new ScrollMagic.Scene({triggerElement: ".genres_fillter_cont"})
  .setClassToggle(".genresfiltersection", "active-game").addTo(controller);
  if(slectedGenre) {

      let scene2 = new ScrollMagic.Scene({triggerElement: ".genres_fillter_cont"})
  .setClassToggle(`.${slectedGenre.innerHTML}-game`, "active-game").addTo(controller);

    let genreGames = document.querySelectorAll(`.${slectedGenre.innerHTML}-game`);
  genreGames.forEach(game => {game.classList.add("active-game")})
  $(".gerneslection").click(function(e) {
    slectedGenre.classList.remove("gerne-slected");
    slectedGenre = e.target;
    slectedGenre.classList.add("gerne-slected");
    genreGames.forEach(game => {game.classList.remove("active-game")})
    genreGames = document.querySelectorAll(`.${slectedGenre.innerHTML}-game`);
    genreGames.forEach(game => {game.classList.add("active-game")})

  })
}
}


function changeTheme () {
  let slecterors = [
    "shadow-header-box.logoname a",
    "shadow-header-box.login",
    "shadow-header-box.login a",
    "shadow-header-box.signup",
    "shadow-header-box.signup a",
    "shadow-header-box.menu ul li a",
    "shadow-header-box#header-box",
    "shadow-footer-box h3",
    "shadow-footer-box a",
    "shadow-footer-box p",
    "shadow-footer-box#footer-box",
    ".gerneslection",
    ".gameBoxfilter",
    ".gotogenrapage a",
    ".contact-us-title h1",
    ".contact-us-form button",
    "#genres_fillter_cont",
    "#contact",
    ".aboutus-card",
    ".community-card",
    ".genre-box",
    ".login-btn",
    "h1",
    "p",
    ".contact-us-title h1",
  ]

  let dark;
  for (let slector of slecterors) {
    if(slector.startsWith("shadow-header-box")) {
      let hostElement = document.querySelector("header-box");
      if(!hostElement) continue;
      let shadowRoot = hostElement.shadowRoot;
      let element = shadowRoot.querySelectorAll(slector.replace("shadow-header-box", ""));
      if(element) {
        element.forEach(el => {
          if(slector.startsWith("shadow-header-box#")) {
            dark = el.classList.toggle("newThemediv");
          } else dark = el.classList.toggle("newTheme");
        })
      }
    }  else if(slector.startsWith("shadow-footer-box")) {
      let hostElement = document.querySelector("footer-box");
      if(!hostElement) continue;
      let shadowRoot = hostElement.shadowRoot;
      let element = shadowRoot.querySelectorAll(slector.replace("shadow-footer-box", ""));
      if(element) {
        element.forEach(el => {
          if(slector.startsWith("shadow-footer-box#")) {
            dark = el.classList.toggle("newThemediv");
          } else dark = el.classList.toggle("newTheme");
        })
      }
    
    } else if(slector.startsWith("#")) {
      if(document.querySelector(slector)) dark= document.querySelector(slector).classList.toggle("newThemediv");
    }else {
      if(document.querySelectorAll(slector)) document.querySelectorAll(slector).forEach(element => {
        dark = element.classList.toggle("newTheme");
      })
    }
  }
  localStorage.setItem("dark", dark);
}


localStorage.getItem("dark") === "true" ? changeTheme() : null;

if($(".mainpage")) {
  if(localStorage.getItem("LoggedIn") === "true" ) {
    document.querySelector(".notiMsg").innerHTML = "Logged In successfully!!"
    $(".notification").addClass("succ");
    $(".notification").css("display", "flex");
    setTimeout(() => {
      $(".notification").fadeOut();
      $(".succ").fadeOut();
      $(".notification").removeClass("succ");
      localStorage.setItem("LoggedIn" , false);
    }, 5000);
  
  }
}


if($("#contact-form")) {
  $("#contact-form").submit(function(e) {
    e.preventDefault();
    let email = $("#contact-form input[name='email']").val();
    let name = $("#contact-form input[name='name']").val();
    let message = $("#contact-form textarea[name='msg']").val();
    if(!email || !name || !message) {
      document.querySelector(".notiMsg").innerHTML = "Please Fill All Contact's Fields"
      $(".notification").addClass("error");
      $(".notification").css("display", "flex");
      setTimeout(() => {
        $(".wrongdata").fadeOut()
        $(".error").fadeOut()
        $(".notification").removeClass("error");
      }, 10000);
      return
    }
    if(!isValidEmail(email)) {
      document.querySelector(".notiMsg").innerHTML = "Invalid Email Format"
      $(".notification").addClass("error");
      $(".notification").css("display", "flex");
      setTimeout(() => {
        $(".notification").fadeOut()
        $(".error").fadeOut()
        $(".notification").removeClass("error");
      }, 10000);
      return
    }
    document.querySelector(".notiMsg").innerHTML = "Message Sent Successfully"
    email = $("#contact-form input[name='email']").val("");
    name = $("#contact-form input[name='name']").val("");
    message = $("#contact-form textarea[name='msg']").val("");
    $(".notification").addClass("succ");
    $(".notification").css("display", "flex");
    setTimeout(() => {
      $(".notification").fadeOut()
      $(".succ").fadeOut()
      $(".notification").removeClass("succ");
    }, 5000);
  })
}


