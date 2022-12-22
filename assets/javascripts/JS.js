// Sự kiện bấm 
/* sự kiện bấm nút menu bar */
// Get btn menu__bars
var btn__menu_bars = document.querySelector(".home__nav-subars")

var menu__bars = document.querySelector(".home__nav-items")
console.log(menu__bars)
btn__menu_bars.addEventListener("click",()=>{
    
    if (menu__bars.style.display === "none") {
        menu__bars.style.display = "flex";
      } else {
        menu__bars.style.display = "none";
      }
})

var lst_nav = document.querySelectorAll(".home__nav-item.nav");
lst_nav.forEach((item)=>{
    item.addEventListener("click",()=>{
      document.querySelector(".home__nav-item.home__nav-active").classList.remove("home__nav-active");
      // console.log(item)
      item.classList.add("home__nav-active")
      
    })
})

document.addEventListener("scroll",()=>{
  if(window.scrollY>15)
  {
     document.querySelector(".home__header").setAttribute("style","background-color: #fff")
     
     document.querySelector(".home__header").classList.add("box__shadow");
    //  document.querySelector(".home__header").setAttribute("style","box-shadow: 2px 0.5px 2px 1px rgba(0, 0, 0, 0.2)")
     document.querySelector(".home__logo-title").setAttribute("style","color: #695aa6")
     document.querySelector(".home__nav-bars").setAttribute("style","color: #6c757d")
     
     

     document.querySelectorAll(".home__nav-link").forEach((item)=>{
        item.setAttribute("style","color: #6c757d");
     })
     document.querySelector(".home__nav-active .home__nav-link").setAttribute("style","color: #fff")
     
     
  }
  else 
  {
    document.querySelector(".home__header").setAttribute("style","background-color: transparent")
    document.querySelector(".home__header").classList.remove("box__shadow");
    // document.querySelector(".home__header").setAttribute("style","box-shadow: 0px")
    document.querySelector(".home__logo-title").setAttribute("style","color: #fff")
    document.querySelector(".home__nav-bars").setAttribute("style","color: #fff")
    

    document.querySelectorAll(".home__nav-link").forEach((item)=>{
      item.setAttribute("style","color: #fff");
   })
  }
})