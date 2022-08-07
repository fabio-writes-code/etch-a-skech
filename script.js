function createDiv(num){
    const div=document.createElement('div');
    div.addEventListener('mouseover',()=>{
        div.classList.add('mouse-over');
    })
    div.classList.add('inside-div');
    const widthHeight=`${1000/Math.sqrt(num)}px`;
    console.log(num,Math.sqrt(1000),widthHeight);
    // div.style.width=widthHeight;
    // div.style.height=widthHeight;
    return div;
}

function setWidthHeight(){
    document.querySelectorAll('.inside-div').forEach(cls=>{
        console.log()
    })
}
function howMany(num){
    const container=document.querySelector('.container');
    for (i=1;i<=num;i++){
        container.appendChild(createDiv(num));
    }
}
howMany(10000);

