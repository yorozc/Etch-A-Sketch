const container = document.getElementById("grid_container")
container.style.flexWrap = 'wrap'


for (let i = 0; i < 16; i++){
    for(let j = 0; j < 17; j++){
        const box = document.createElement("div")
        box.classList.add("boxes")
        box.style.border = '1px solid black'
        box.style.flexGrow = 1
        box.style.height = '50px'
        box.style.width = '50px'
        container.appendChild(box)

        box.addEventListener("mouseover", () =>{
            box.style.backgroundColor = "black"
        })
        


        
    }
}



