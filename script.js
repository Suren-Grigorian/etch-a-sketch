function fillRow(n, row){
    for (let i=0; i< n; i++){
        const gridCell = document.createElement("div")
        gridCell.className = "singleCell"
        gridCell.style.backgroundColor = bgColor
        gridCell.style.borderColor = "rgb(0,0,0)"
        gridCell.dataset.percentage = Number(0)
        gridCell.addEventListener("mouseover",()=> {
            if (mode === "default"){
                gridCell.style.backgroundColor = fillColor
            }else if (mode == "rainbow"){
                gridCell.style.backgroundColor = getRandomColor()
            }else if (mode == "eraser"){
                gridCell.style.backgroundColor = bgColor
            }else if (mode == "shadow"){
                if (Number(gridCell.dataset.percentage) < 10){
                    gridCell.dataset.percentage = Number(gridCell.dataset.percentage) + 1;}
                gridCell.style.backgroundColor = colorTransform(gridCell.dataset.percentage, 
                                                                toRGBArray(gridCell.style.backgroundColor), 
                                                                toRGBArray(fillColor))

            }else{
                gridCell.style.backgroundColor = bgColor
            }
        })
        row.appendChild(gridCell)
    }
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


function colorTransform(percentage, start, end){
    if (start == end){
        return
    }
    const [rStart, gStart, bStart] = start;
    const [rEnd, gEnd, bEnd] = end;
    let rResult = rStart + (rEnd - rStart) * percentage / 10
    let gResult = gStart + (gEnd - gStart) * percentage / 10
    let bResult = bStart + (bEnd - bStart) * percentage / 10
    return (`rgb(${rResult}, ${gResult}, ${bResult}`)
}

function getRandomColor() {
  let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)} )`
  return color

}

function themeChange(bg, fill, background){
    bgColor = bg
    fillColor = fill
    removeGrid()
    fillGrid(gridSize)
    slider.style.setProperty("--thumb-color", fill);
    slider.style.backgroundColor = bg
    output.style.backgroundColor = bg
    if (fill != "rgb(0,0,0)"){
        output.style.color = fill
    } else{
        output.style.color = "rgb(0,0,0)"}
    body.style.backgroundColor = background;
    document.querySelectorAll("button").forEach(button =>{
        button.style.color = bg
        button.style.borderColor = bg
        
    })
    document.querySelector("h1").style.color = bg
    document.querySelector("h2").style.color = bg
}

const toRGBArray = (rgbStr) => rgbStr.match(/\d+/g).map(Number);

//modified version taken from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
}


//taken from https://www.w3schools.com/howto/howto_js_dropdown.asp
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


const slider = document.getElementById("myRange");
slider.addEventListener("change", function() {
    document.getElementById("output").textContent = slider.value;
});

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

const fillPicker = document.getElementById("custom-fill-color")
fillPicker.addEventListener("input", ()=>{
    fillColor = hexToRgb(fillPicker.value)
})

let defaultSelection = document.getElementById("choice-default")
defaultSelection.addEventListener("click", () =>{
    themeChange( "rgb(246,142,95)","rgb(255,0,0)","rgb(245, 221, 144)")
})

let whiteSelection = document.getElementById("choice-white")
whiteSelection.addEventListener("click", () =>{
    themeChange("rgb(253,253,253)","rgb(0,0,0)", "rgb(53, 52, 52)")
})

let blackSelection = document.getElementById("choice-black")
blackSelection.addEventListener("click", () =>{
    themeChange("rgb(0,0,0)","rgb(255,255,255)","rgb(95, 95, 95)" )
})

let randomSelection = document.getElementById("choice-random")
randomSelection.addEventListener("click", () =>{
    themeChange(getRandomColor(),getRandomColor(),getRandomColor() )
})


let gridSize = 16
const container = document.getElementById("container")
const body = document.querySelector("body")
let mode = "default"
let fillColor = "rgb(255,0,0)"
let bgColor = "rgb(246,142,95)"

fillGrid(gridSize)