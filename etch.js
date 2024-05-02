const container = document.querySelector("#grid_container")
container.style.border = '1px solid black'

const square_content = document.createElement("div") //this will be the square
//figure out how to change width and height using div
square_content.classList.add("square")
square_content.textContent = "Hello"
square_content.style.height = '250px'
square_content.style.border = '1px solid red' 

container.appendChild(square_content)
