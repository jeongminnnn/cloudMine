import '../scss/main.scss'

window.addEventListener("DOMContentLoaded", function() {

})

document.querySelector('nav svg').addEventListener('click', () => {
    
    const mobGnbEl = document.querySelector('nav .mobGnb')
    const svgEl = document.querySelector('nav svg')
    const bodyEl = document.querySelector('body')

    bodyEl.classList.toggle("scrNone");
    svgEl.classList.toggle("active");
    mobGnbEl.classList.toggle("active");
})