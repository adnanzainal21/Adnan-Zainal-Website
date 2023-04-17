// NAV SCROLL JS
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('nav-scroll', window.scrollY  > 0)
});


//......... swiper.....
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
});

// ........phone menu.........

document.querySelector('.open').addEventListener('click',()=>{
    document.querySelector('.close').style.display='block'
    document.querySelector('.open').style.display='none'
    document.querySelector('ul').style.left='0'
});

document.querySelector('.close').addEventListener('click',()=>{
    document.querySelector('.close').style.display='none'
    document.querySelector('.open').style.display='block'
    document.querySelector('ul').style.left='-270px'
})