let mouseDown=false;

//Variables
// document.body.onmousedown=()=>(mouseDown=true);
// document.body.onmouseup=()=>(mouseDown=false);

document.querySelector('.container').onmousedown=()=>mouseDown=true;
document.querySelector('.container').onmouseup=()=>mouseDown=false;


const slider=document.getElementById('myRange');
const output=document.querySelector('.slider-count');
const colorGrid=document.querySelector('#color-pick');
let fromGrid='#000000';
colorGrid.oninput=(e)=>fromGrid=e.target.value;

output.textContent=`${slider.value} X ${slider.value}`;
slider.onmousemove=(e)=>updateGridDisplay(e);
slider.onchange=(e)=>slideUpdate(e);

//Default state
gridSize(slider.value);
document.querySelector('.reset-btn').addEventListener('click',()=>slideUpdate());



//Color Variables & changes
let strokeColor='Color'
document.querySelectorAll('.color-btn').forEach(btn=>btn.addEventListener('click',()=>{strokeColor=btn.textContent;
console.log(strokeColor);
}))

function updateGridDisplay(e){
    output.textContent=`${e.target.value} X ${e.target.value}`
}

//Slider Update & Grid Reset
function slideUpdate(){
    document.querySelector('.container').innerHTML='';
    gridSize(slider.value);
}

function createDiv(num){
    const div=document.createElement('div');
    div.addEventListener('mouseover',changeColor);
    div.classList.add('inside-div');
    const widthHeight=`${960/num}px`;
    div.style.width=widthHeight;
    div.style.height=widthHeight;
    return div;
}

function changeColor(e){
    if(e.type==='mouseover' && !mouseDown) return;
    switch (strokeColor){
        case 'Color':
            e.target.style.backgroundColor=fromGrid;
            break;
        case 'Rain Bow':
            const red=Math.random()*257;
            const green=Math.random()*257;
            const blue=Math.random()*257;
            e.target.style.backgroundColor=`rgb(${red},${blue},${green})`;
            break;
        case 'Eraser':
            e.target.style.backgroundColor='#fefefe';
            break;
    }
    
}

function gridSize(num){
    const container=document.querySelector('.container');
    for (i=1;i<=num*num;i++){
        container.appendChild(createDiv(num));
    }
}


