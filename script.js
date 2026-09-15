let gridSize = 16
const container = document.getElementById("container")
let mode = "default"


const slider = document.getElementById("myRange");
slider.addEventListener("change", function() {
    document.getElementById("output").textContent = slider.value;
});


function fillRow(n, row){
    for (let i=0; i< n; i++){
        const gridCell = document.createElement("div")
        gridCell.className = "singleCell"
        gridCell.style.backgroundColor = "rgb(246, 142, 95)"
        gridCell.dataset.percentage = Number(0)
        gridCell.addEventListener("mouseover",()=> {
            if (mode === "default"){
                gridCell.style.backgroundColor = "rgb(255,0,0)"
            }else if (mode == "rainbow"){
                gridCell.style.backgroundColor = getRandomColor()
            }else if (mode == "eraser"){
                gridCell.style.backgroundColor = "rgb(246,142,95)"
            }else if (mode == "shadow"){
                gridCell.dataset.percentage = Number(gridCell.dataset.percentage) + 1;
                console.log(gridCell.style.backgroundColor)
                gridCell.style.backgroundColor = colorTransform(gridCell.dataset.percentage, toRGBArray(gridCell.style.backgroundColor), [255,0,0])

            }
        })
        row.appendChild(gridCell)
    }
}

function colorTransform(percentage, start, end){
    if (start == end){
        return
    }
    const [rStart, bStart, gStart] = start;
    const [rEnd, bEnd, gEnd] = end;
    let rResult = rStart + (rEnd - rStart) * percentage / 10
    let bResult = bStart + (bEnd - bStart) * percentage / 10
    let gResult = gStart + (gEnd - gStart) * percentage / 10
    return (`rgb(${rResult}, ${bResult}, ${gResult}`)
}


function fillGrid(n){
    for (let i=0; i<n; i++){
        const row = document.createElement("div")
        row.className = "row"
        fillRow(n, row)
        container.appendChild(row)
    }
}


function clearBoard(){
    console.log(gridSize)
    removeGrid()
    fillGrid(gridSize)
}


function removeGrid(){
    document.querySelectorAll(".row").forEach(row => {
        row.remove()
    })
}


function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const toRGBArray = (rgbStr) => rgbStr.match(/\d+/g).map(Number);

const btnConfirm = document.getElementById("confirm")
btnConfirm.addEventListener("click", ()=>{
    removeGrid()
    gridSize = slider.value
    fillGrid(gridSize)
})

const btnDefault = document.getElementById("default")
btnDefault.addEventListener("click", ()=>{
    mode = "default"
})

const btnShadow = document.getElementById("shadow")
btnShadow.addEventListener("click", ()=>{
    mode = "shadow"
})


const btnRainbow = document.getElementById("rainbow")
btnRainbow.addEventListener("click", ()=>{
    mode = "rainbow"
})

const btnEraser = document.getElementById("eraser")
btnEraser.addEventListener("click", ()=>{
    mode = "eraser"
})

const btnReset = document.getElementById("reset")
btnReset.addEventListener("click", ()=>{
    clearBoard()
})



fillGrid(gridSize)
