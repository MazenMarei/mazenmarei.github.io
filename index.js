let  dataBase = [
  {
    email : "admin@admin.com",
    password : "admin"
  },
  {
    email : "user@user.com",
    password : "user"
  }
]



if(document.getElementsByClassName("container")[0]) {
    let sliderCopy = document.getElementsByClassName("container")[0].cloneNode(true);
    document.getElementsByClassName("main-slider-container")[0].innerHTML = sliderCopy.innerHTML + sliderCopy.innerHTML + sliderCopy.innerHTML;
}    

if(document.querySelector(".our-gernes")) {
  let controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .15} });
    let scene = new ScrollMagic.Scene({triggerElement: ".aboutus-nextpage", duration: 1000}).setClassToggle(".our-gernes", "active-gerne").addTo(controller);
}   

if($(".scrollUp")) {
  console.log("scrollUp");
  $(".scrollUp").click(function(e) {
    console.log("clicked");
      $('section').animatescroll({scrollSpeed:1000,easing:'easeOutBounce'});
      
  });
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
    let user = dataBase.find(user => user.email === email);
    if(user) {
      $(".wrongdata p")[0].innerHTML = "User Already Exist";
      $(".wrongdata").css("display", "flex");
      $(".wrongdata").css("top", "22%");
      setTimeout(() => {
        $(".wrongdata").fadeOut()
      }, 10000);
    } else {
      console.log(dataBase);
      window.location.href = "login.html";
    }
  })
}

if($("#login-form")) {
  $("#login-form").submit(function(e) {
    e.preventDefault();
    let email = $("#Email").val();
    let password = $("#password").val();

    let user = dataBase.find(user => user.email === email && user.password === password);
    if(user) {
      window.location.href = "index.html";
    } else {
      $(".wrongdata p")[0].innerHTML = "Wrong Email or Password";
      $(".wrongdata").css("display", "flex");
      setTimeout(() => {
        $(".wrongdata").fadeOut()
      }, 10000);
    }
  })
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
  let scene2 = new ScrollMagic.Scene({triggerElement: ".genres_fillter_cont"})
  .setClassToggle(`.${slectedGenre.innerHTML}-game`, "active-game").addTo(controller);

  let genreGames = document.querySelectorAll(`.${slectedGenre.innerHTML}-game`);
  genreGames.forEach(game => {game.classList.add("active-game")})

  $(".gerneslection").click(function(e) {
    console.log(e.target);
    slectedGenre.classList.remove("gerne-slected");
    slectedGenre = e.target;
    slectedGenre.classList.add("gerne-slected");
    
    genreGames.forEach(game => {game.classList.remove("active-game")})
    genreGames = document.querySelectorAll(`.${slectedGenre.innerHTML}-game`);
    genreGames.forEach(game => {game.classList.add("active-game")})

  })
}
