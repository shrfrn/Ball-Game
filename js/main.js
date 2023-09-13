'use strict'

var ballSize = 100

function onBallClick() {
    const elBall = document.querySelector('.ball')

    ballSize += getRandomInt(20, 60)

    if(ballSize > 400) {
        ballSize = 100
    }

    const color = getRandomColor()

    elBall.style.backgroundColor = color
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'

    elBall.innerText = ballSize
}