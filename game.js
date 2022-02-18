import {update as updatesnake,draw as drawsnake,snakespeed} from '/snake.js'
let lastrender=0
const board=document.getElementById('board')

function main(currentTime){
    window.requestAnimationFrame(main)
    const secondssincelastrender=(currentTime-lastrender)/1000;
    if(secondssincelastrender<1/snakespeed) {
        return
    }
    
    lastrender=currentTime
    console.log("render")
    update()
    draw()
}
window.requestAnimationFrame(main)
function update()
{
    updatesnake()
}
function draw()
{
    drawsnake(board)
}