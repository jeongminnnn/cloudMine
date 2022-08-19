import '../scss/main.scss'

window.addEventListener("DOMContentLoaded", function() {

    // mysql_user_증가 함수
    userGroupFunc();
})

document.querySelector('nav svg').addEventListener('click', () => {
    
    const mobGnbEl = document.querySelector('nav .mobGnb')
    const svgEl = document.querySelector('nav svg')
    const bodyEl = document.querySelector('body')

    bodyEl.classList.toggle("scrNone");
    svgEl.classList.toggle("active");
    mobGnbEl.classList.toggle("active");
})

function userGroupFunc() {

    const mysql_user = document.querySelector('.mysql_user')
    const userKey = mysql_user.dataset.group
    const userGroup = {
        miner: 0.00001,
        contributor: 0.00002,
        ambassador: 0.00004,
        node: 0.001
    }

    for (let key in userGroup) {

        const keyVal = userGroup[key]
        let userVal = parseFloat(mysql_user.value)    

        if(key == userKey) {

            setInterval(() => {

                userVal += keyVal;

                mysql_user.value = (Math.floor(userVal * 100000) / 100000).toFixed(5)
            }, 1000);
        }
    }
}