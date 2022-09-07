import '../scss/random.scss'
import './common'

// const inputEls = document.querySelectorAll('input')

window.addEventListener('keyup', e => {
    console.log(e.target)

    if(e.target.checkValidity()) {
console.log(1)
        

    } else {
console.log(2)
        
    }
})