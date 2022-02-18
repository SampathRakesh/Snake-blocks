export const snakespeed=1
const snakebody=[{X:11,Y:11}]
export function update()
{
   console.log("UPDATE")
}
export function draw(board)
{
    snakebody.forEach(pos=>{
        const snakeelement=document.createElement(<div></div>)
        snakeelement.style.gridRowStart=pos.x
        snakeelement.style.gridColumnStart=pos.y
        snakeelement.classList.add('snake')
        board.appendChild(snakeelement)

    })
  console.log("DRAW")
}