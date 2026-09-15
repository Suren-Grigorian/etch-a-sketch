const gridSize = 16
const container = document.getElementById("container")
const btnReset = document.getElementById("reset")
btnReset.addEventListener("click", ()=>{
    clearBoard()
})

const slider = document.getElementById("myRange");
slider.addEventListener("change", function() {
    document.getElementById("output").textContent = slider.value;
});


function fillRow(n, row){
    for (let i=0; i< n; i++){
        const gridCell = document.createElement("div")
        gridCell.className = "singleCell"
        gridCell.addEventListener("mouseover",()=> {
            gridCell.classList.add("permahover")})
        row.appendChild(gridCell)
    }}



function fillGrid(n){
    for (let i=0; i<n; i++){
        const row = document.createElement("div")
        row.className = "row"
        fillRow(n, row)
        container.appendChild(row)
    }
}


function clearBoard(){
    const permahoverList = document.getElementsByClassName("permahover")
    let permahoverArray = [...permahoverList]
    permahoverArray.forEach(cell=> {
        cell.classList.remove("permahover");
    })
}


function removeCells(){
    document.querySelectorAll(".row").forEach(row => {
        row.remove()
    })
}


const btnConfirm = document.getElementById("confirm")
btnConfirm.addEventListener("click", ()=>{
    removeCells()
    const userSizeChoice = slider.value
    fillGrid(userSizeChoice)
})


fillGrid(gridSize)
