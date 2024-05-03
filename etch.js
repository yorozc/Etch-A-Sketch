const container = document.getElementById("grid_container")
container.style.border = '1px solid black'
container.style.justifyContent = 'space-between'


for (let i = 0; i < 16; i++){
    const box = document.createElement("div")
    box.classList.add("box")
    box.textContent = 'box ' + (i+1)
    box.style.border = '2px solid purple'
    box.style.flexGrow = 1
    box.style.height = '50px'
    container.appendChild(box)

}

