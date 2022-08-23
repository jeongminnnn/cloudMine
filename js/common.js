window.addEventListener("DOMContentLoaded", function() {

    if(document.querySelector('header')) {
        
        document.querySelector('nav svg').addEventListener('click', navClick, false)
        userGroupFunc()
        headerScrl()
    }
})

// HEADER
function userGroupFunc() {// mysql_user_증가 함수

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
const navClick= () => {
    
    const mobGnbEl = document.querySelector('nav .mobGnb')
    const svgEl = document.querySelector('nav svg')
    const bodyEl = document.querySelector('body')

    bodyEl.classList.toggle("scrNone");
    svgEl.classList.toggle("active");
    mobGnbEl.classList.toggle("active");
}
const headerScrl = () => {
    let prevScrollTop = 0;
    document.addEventListener("scroll", () => {

        const nextScrollTop = window.pageYOffset || 0;
        if (nextScrollTop > prevScrollTop){

            headerMoving("down");
        } else if (nextScrollTop < prevScrollTop){

            headerMoving("up");
        }
        prevScrollTop = nextScrollTop;
    });

    const headerEl = document.querySelector('header');
    const headerMoving = (direction) => {

        if (direction === "up"){

            headerEl.classList.remove('scrDown')
        } else if (direction === "down"){

            headerEl.classList.add('scrDown')
        }
    };
}
