let gridsizeNum = 16
let containerSize = 500
let squareSize = containerSize / gridsizeNum

const body = document.getElementsByTagName('body')[0]
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'

const container = document.getElementById("grid_container")
container.style.width = containerSize + "px"
container.style.height = containerSize + "px"
container.style.border = 'solid 1px'
container.style.display = 'flex'
container.style.flexWrap = 'wrap'


for(let i = 0; i < gridsizeNum; i++){
    let row = document.createElement("div")
    row.className = "row"
    row.style.display = "flex"
    for (let j = 0; j < gridsizeNum; j++){
        let box = document.createElement("div")
        box.className = "box"
        box.style.flex = '1'
        
        box.addEventListener("mouseover", ()=> {
            box.style.backgroundColor = "black"
        })
        row.appendChild(box)
    }
    container.appendChild(row)
}

let boxes = document.getElementsByClassName("box")
for (i = 0; i < boxes.length; i++){
    boxes[i].style.border = "solid black 0.5px"
    boxes[i].style.width = squareSize + "px"
    boxes[i].style.height = squareSize + "px"
}


