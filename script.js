const gridWidth = 750
const gridHeight = 750
const gridSize = 16
let colorsList = ["#586ba4", "#324376", "#f5dd90", "#f68e5f", "#f76c5e"]

const page = document.getElementById("page")
const container = document.getElementById("container")
container.style.width = `${gridWidth}px`
container.style.height = `${gridHeight}px`
container.style.backgroundColor = "blue"
container.style.display = "flex"
container.style.flexDirection = "column"


function fillRow(n, row){
    for (let i=0; i< n; i++){
        const gridCell = document.createElement("div")
        gridCell.className = "singleCell"
        gridCell.style.width = `${gridWidth / n}px`
        gridCell.style.height = `${gridHeight / n}px`
        gridCell.style.borderWidth = "1px"
        gridCell.style.borderStyle = "solid"
        row.appendChild(gridCell)
    }
}


function fillGrid(n){
    for (let i=0; i<n; i++){
        const row = document.createElement("div")
        row.style.width = `${gridWidth}px`
        row.style.height = `${gridHeight / n}px`
        row.style.backgroundColor = "green"
        row.style.display = "flex"
        fillRow(n, row)
        container.appendChild(row)
    }
}

const btnReset = document.getElementById("reset")
btnReset.addEventListener("click", ()=>{
    clearBoard()
})

function clearBoard(){
    const permahoverList = document.getElementsByClassName("permahover")
    var permahoverArray = [...permahoverList]
    permahoverArray.forEach(cell=> {
        cell.classList.remove("permahover");
    })
}


fillGrid(gridSize)
const singleCellList = document.querySelectorAll(".singleCell")
var singleCellArray = [...singleCellList]
singleCellArray.forEach(cell => {
    cell.addEventListener("mouseover",()=> {
        cell.classList.add("permahover")
    })
})

let userSizeChoice = 16
var slider = document.getElementById("myRange");


function getSliderValue(){
    slider.addEventListener("input", (event)=> {
    console.log(event.target.value)
    return event.target.value;
    
})
}


const btnConfirm = document.getElementById("confirm")
btnConfirm.addEventListener("click", ()=>{
    let singleCellList = document.querySelectorAll(".singleCell")
    var singleCellArray = [...singleCellList]
    singleCellArray.forEach(cell => {
        cell.remove()
    })

    const userSizeChoice = slider.value
    fillGrid(userSizeChoice)
    singleCellList = document.querySelectorAll(".singleCell")
    singleCellArray = [...singleCellList]
    singleCellArray.forEach(cell => {
        cell.addEventListener("mouseover",()=> {
            cell.classList.add("permahover")
        })
    })
})



