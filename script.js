const gridWidth = 1500
const gridHeight = 1500
const gridSize = 16
let colorsList = ["#586ba4", "#324376", "#f5dd90", "#f68e5f", "#f76c5e"]

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
        gridCell.style.backgroundColor = colorsList[3]
        gridCell.style.width = `${gridWidth / n}px`
        gridCell.style.height = `${gridHeight / n}px`
        gridCell.style.borderWidth = "3px"
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




fillGrid(gridSize)
const singleCellList = document.querySelectorAll(".singleCell")
var singleCellArray = [...singleCellList]
singleCellArray.forEach(cell => {
    cell.addEventListener("mouseover",()=> {
        cell.style.backgroundColor = "red"
        cell.classList.add("permahover")
    })
})
console.log(singleCellArray)
