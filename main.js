const navItems = document.querySelector("#nav-items")
const openNavBtn = document.querySelector("#open-nav-btn")
const closeNavBtn = document.querySelector("#close-nav-btn")

openNavBtn.addEventListener("click",()=> {
    navItems.style.display = "flex"
    openNavBtn.style.display = "none"
    closeNavBtn.style.display = "inline-block"

})

const closeNav = () => {
    navItems.style.display = "none"
    closeNavBtn.style.display = "none"
    openNavBtn.style.display = "inline-block"
}
closeNavBtn.addEventListener("click",closeNav);


//close nav menu  when a menu item clicked

if(window.innerWidth < 1024) {
    document.querySelectorAll("#nav-items li a").forEach(navItem => {
        navItem.addEventListener("click",()=> {
            closeNav();
        })
    })
}

//change navbar style on scroll

window.addEventListener("scroll", ()=>{
    document.querySelector("nav").classList.toogle("window-scroll", window.scrollY > 0)
})


//testemonials
var swiper = new Swiper(".mySwiper", {
    sliderPerView:1,
    spaceBetween:30,
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },

    //responsive breakpoint
    breakpoint: {
        //tablet
        600: {
            sliderPerView:2
        },

        1024: {
            sliderPerView:3
        }

    }
});